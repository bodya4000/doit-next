import { Box, Container, SxProps, Theme } from '@mui/material';

interface BaseContainerProps {
	children?: React.ReactNode;
	sx?: SxProps<Theme>;
}

export default function BaseContainer({ children, sx }: BaseContainerProps) {
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
			<Box
				sx={{
					px: 4,
					py: 2,
					...sx,
				}}
			>
				{children}
			</Box>
		</Container>
	);
}
