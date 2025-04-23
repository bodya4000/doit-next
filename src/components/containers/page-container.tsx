import { Container, ContainerProps } from '@mui/material';

export default function PageContainer({ children, sx, ...rest }: ContainerProps) {
	return (
		<Container
			maxWidth='lg'
			sx={{
				px: { xs: 2, sm: 4, md: 6 },
				py: { xs: 3, sm: 4 },
				...sx,
			}}
			{...rest}
		>
			{children}
		</Container>
	);
}
