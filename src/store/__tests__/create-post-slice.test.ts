import createPostReducer, {
	nextStep,
	prevStep,
	setBody,
	setTitle,
	openResultModal,
	closeResultModal,
	reset,
} from '../create-post-slice';

describe('createPostSlice', () => {
	const initialState = {
		step: 1,
		title: '',
		body: '',
		isResultModalOpen: false,
	};

	it('should return the initial state', () => {
		expect(createPostReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should go to next step', () => {
		const result = createPostReducer(initialState, nextStep());
		expect(result.step).toBe(2);
	});

	it('should go to previous step', () => {
		const state = { ...initialState, step: 2 };
		const result = createPostReducer(state, prevStep());
		expect(result.step).toBe(1);
	});

	it('should set the title', () => {
		const result = createPostReducer(initialState, setTitle('My Title'));
		expect(result.title).toBe('My Title');
	});

	it('should set the body', () => {
		const result = createPostReducer(initialState, setBody('My Content'));
		expect(result.body).toBe('My Content');
	});

	it('should open the result modal', () => {
		const result = createPostReducer(initialState, openResultModal());
		expect(result.isResultModalOpen).toBe(true);
	});

	it('should close the result modal', () => {
		const state = { ...initialState, isResultModalOpen: true };
		const result = createPostReducer(state, closeResultModal());
		expect(result.isResultModalOpen).toBe(false);
	});

	it('should reset the state', () => {
		const state = {
			step: 3,
			title: 'Old Title',
			body: 'Old Body',
			isResultModalOpen: true,
		};
		const result = createPostReducer(state, reset());
		expect(result).toEqual(initialState);
	});
});
