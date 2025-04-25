import snackbarReducer, { showSnackbar, closeSnackbar } from '../app-snack-bar-slice';
import { Severities } from '@/enums';

describe('snackbarSlice', () => {
	it('should return the initial state', () => {
		expect(
			snackbarReducer(undefined, { type: '' })
		).toEqual({
			open: false,
			message: '',
			severity: Severities.SUCCESS,
		});
	});

	it('should open the snackbar with a message', () => {
		const result = snackbarReducer(undefined, showSnackbar({ message: 'Hello!' }));
		expect(result).toEqual({
			open: true,
			message: 'Hello!',
			severity: Severities.SUCCESS,
		});
	});

	it('should close the snackbar', () => {
		const prevState = {
			open: true,
			message: 'Test',
			severity: Severities.SUCCESS,
		};

		const result = snackbarReducer(prevState, closeSnackbar());
		expect(result).toEqual({
			open: false,
			message: '',
			severity: Severities.SUCCESS, 
		});
	});
});
