import { Container, ContainerProps } from '@mui/material';

export default function PageContainer({ children, sx, ...rest }: ContainerProps) {
	return (
		<Container
			component='main'
			disableGutters
			maxWidth={false}
			sx={{
				px: { xs: 2, sm: 4, md: 6, lg: 10 },
				py: { xs: 2, sm: 3 },
				maxWidth: '1450px',
				width: '100%',
				mx: 'auto',
				...sx,
			}}
			{...rest}
		>
			{children}
		</Container>
	);
}
