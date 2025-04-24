import { postService } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector, useDebouncedValue } from '.';

const usePost = () => {
	const searchText = useAppSelector(state => state.post.searchText);
	const debouncedSearch = useDebouncedValue(searchText, 500);

	const query = useQuery({
		queryKey: ['posts', debouncedSearch],
		queryFn: () => postService.getPosts(),
		select: posts => {
			return posts.filter(post => post.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
		},
		enabled: true,
	});

	return query;
};

export default usePost;
