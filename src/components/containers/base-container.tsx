import { Container } from '@mui/material';

export function BaseContainer({ children }: { children: React.ReactNode }) {
	return (
		<Container
			maxWidth={false}
			sx={{
				px: {
					xs: 2,
					sm: 4,
					md: 6,
					lg: 10,
				},
			}}
		>
			{children}
		</Container>
	);
}
