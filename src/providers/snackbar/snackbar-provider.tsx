'use client';

import { AppSnackbar } from '@/components';
import { useAppSelector } from '@/hooks';
import { closeSnackbar } from '@/store/app-snack-bar-slice';
import { useDispatch } from 'react-redux';

const SnackbarProvider = () => {
	const message = useAppSelector(state => state.appSnackBar.message);
	const severity = useAppSelector(state => state.appSnackBar.severity);
	const open = useAppSelector(state => state.appSnackBar.open);
	const dispatch = useDispatch();
	const close = () => {
		dispatch(closeSnackbar());
	};
	return <>{open && <AppSnackbar onClose={close} severity={severity} message={message} />}</>;
};

export default SnackbarProvider;
