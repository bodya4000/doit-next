import { ButtonBase, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
	children: ReactNode;
}

const TouchableOpacity = ({ children, sx, ...rest }: Props) => {
	return (
		<ButtonBase
			sx={{
				minHeight: '32px',
				minWidth: '32px',
				display: 'flex',
				alignItems: 'center',
				transition: 'opacity 0.2s',
				opacity: 1,
				'&:hover': {
					opacity: 0.7,
				},
				padding: '8px 8px',
				...sx,
			}}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default TouchableOpacity;
