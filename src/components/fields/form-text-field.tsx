import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { Icon, IconName } from '../icons';

type FormTextFieldProps = TextFieldProps & {
	iconName?: IconName;
};

const FormTextField = ({ iconName, ...rest }: FormTextFieldProps) => {
	return (
		<TextField
			variant='outlined'
			fullWidth
			InputProps={{
				startAdornment: iconName ? (
					<InputAdornment position='start'>
						<Icon name={iconName} color='action' />
					</InputAdornment>
				) : undefined,
				...rest.InputProps,
			}}
			{...rest}
		/>
	);
};

export default FormTextField;
