import commentsReducer, {
	addToComments,
	removeFromComments,
	openCommentsModal,
	closeCommentsModal,
} from '../comments-slice';
import { Post } from '@/types';

describe('commentsSlice', () => {
	const mockPost: Post = {
		title: 'Test post',
		body: 'This is a comment',
		userId: 0,
		id: 0
	};

	it('should return the initial state', () => {
		expect(commentsReducer(undefined, { type: '' })).toEqual({
			comments: [],
			isCommentsModalOpen: false,
		});
	});

	it('should add a comment', () => {
		const result = commentsReducer(undefined, addToComments(mockPost));
		expect(result.comments).toContainEqual(mockPost);
	});

	it('should remove a comment', () => {
		const prevState = {
			comments: [mockPost],
			isCommentsModalOpen: false,
		};
		const result = commentsReducer(prevState, removeFromComments(mockPost));
		expect(result.comments).not.toContainEqual(mockPost);
	});

	it('should open the comments modal', () => {
		const result = commentsReducer(undefined, openCommentsModal());
		expect(result.isCommentsModalOpen).toBe(true);
	});

	it('should close the comments modal', () => {
		const prevState = {
			comments: [],
			isCommentsModalOpen: true,
		};
		const result = commentsReducer(prevState, closeCommentsModal());
		expect(result.isCommentsModalOpen).toBe(false);
	});
});
