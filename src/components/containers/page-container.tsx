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
				height:'100%',
				mx: 'auto',
				bgcolor: 'background.default',
				...sx,
			}}
			{...rest}
		>
			{children}
		</Container>
	);
}
