import { ButtonBase, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends ButtonProps{
	children: ReactNode;
}

const TouchableOpacity = ({ children, sx, ...rest }: Props) => {
	return (
		<ButtonBase
			onClick={() => console.log('clicked')}
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1.5,
				px: 2,
				py: 1.5,
				borderRadius: 2,
				transition: 'opacity 0.2s',
				opacity: 1,
				'&:hover': {
					opacity: 0.7,
				},
				...sx
			}}

			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default TouchableOpacity;
