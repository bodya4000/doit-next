import { useAppSelector } from '@/hooks';
import { setSearchText } from '@/store/posts-slice';
import { useDispatch } from 'react-redux';
import { SearchTextField } from '../fields';

const PostSearch = () => {
	const dispatch = useDispatch();
	const searchText = useAppSelector(state => state.post.searchText);
	const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchText(e.target.value));
	};

	return (
		<>
			<SearchTextField onChange={onSearchTextChange} value={searchText} />
		</>
	);
};

export default PostSearch;
