import { Post } from '@/types';

class PostService {
	private readonly URL = process.env.NEXT_PUBLIC_API_URL;

	async getPosts(): Promise<Post[]> {
		const res = await fetch(`${this.URL}/posts`);
		if (!res.ok) throw new Error('Failed to fetch posts');
		return res.json();
	}
}

const postService = new PostService();

export default postService;
