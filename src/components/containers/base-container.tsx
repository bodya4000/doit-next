import { Box, Container } from '@mui/material';

export default function BaseContainer({ children }: { children?: React.ReactNode }) {
	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{
				p: 0,
				m: 0,
				width: '100%',
			}}
		>
			<Box sx={{ px: 4, py: 2 }}>{children}</Box>
		</Container>
	);
}
