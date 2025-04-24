import { ButtonBase, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
	children: ReactNode;
}

const TouchableOpacity = ({ children, sx, ...rest }: Props) => {
	return (
		<ButtonBase
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: {
					xs: 1,
					sm: 1,
					md: 1,
				},
				padding: '4px 8px',
				borderRadius: '16px',
				transition: 'opacity 0.2s',
				opacity: 1,
				'&:hover': {
					opacity: 0.7,
				},
				...sx,
			}}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default TouchableOpacity;
