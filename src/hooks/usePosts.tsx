import { postService } from '@/services';
import { useQuery } from '@tanstack/react-query';

const usePost = () => {
	const data = useQuery({
		queryKey: ['repoData'],
		queryFn: () => postService.getPosts(),
	});
	return data;
};
export default usePost;
