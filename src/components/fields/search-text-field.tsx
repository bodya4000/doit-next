import { Box, Input, InputProps } from '@mui/material';
import { Icon } from '../icons';

type Props = InputProps;

const SearchTextField = ({ value, onChange, ...props }: Props) => {
	return (
		<Box
			sx={{
				mx: 2,
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				border: '1px solid',
				borderColor: 'grey.400',
				borderRadius: 2,
				px: 2,
				py: 1,
				transition: 'border-color 0.2s',
				'&:focus-within': {
					borderColor: 'primary.main',
				},
			}}
		>
			<Icon name='search' sx={{ color: 'grey.600', fontSize: 20 }} />
			<Input
				value={value}
				onChange={onChange}
				disableUnderline
				fullWidth
				placeholder='Пошук...'
				{...props}
			/>
		</Box>
	);
};

export default SearchTextField;
