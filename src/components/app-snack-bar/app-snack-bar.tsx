import { Severities } from '@/enums';
import { Alert, Snackbar } from '@mui/material';

interface Props {
	onClose: () => void;
	severity: Severities;
	message: string;
}

const AppSnackbar = ({ onClose, severity, message }: Props) => {
	return (
		<Snackbar
			open={true}
			autoHideDuration={3000}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert severity={severity} onClose={onClose}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default AppSnackbar;
