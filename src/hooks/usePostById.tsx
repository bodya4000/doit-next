import { postService } from '@/services';
import { useQuery } from '@tanstack/react-query';

const usePostById = (id: number) => {
	const query = useQuery({
		queryKey: ['posts', id],
		queryFn: () => postService.getPosts(),
		select: posts => {
			return posts.filter(post => post.id == id);
		},
		enabled: true,
	});

	return query;
};

export default usePostById;
