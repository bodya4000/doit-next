import { Post } from '@/types';
import postService from '../PostService';

describe('PostService', () => {
	const mockPosts: Post[] = [
		{ userId: 1, id: 1, title: 'Post 1', body: 'Content 1' },
		{ userId: 2, id: 2, title: 'Post 2', body: 'Content 2' },
	];

	beforeEach(() => {
		global.fetch = jest.fn();
	});

	it('should fetch posts successfully', async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => mockPosts,
		});

		const result = await postService.getPosts();
		expect(result).toEqual(mockPosts);
		expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
	});

	it('should throw error when fetch fails', async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
		});

		await expect(postService.getPosts()).rejects.toThrow('Failed to fetch posts');
	});
});
