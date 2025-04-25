import { debounce } from '../debounce';

jest.useFakeTimers();

describe('debounce', () => {
	it('should call the function after the delay', () => {
		const fn = jest.fn();
		const debounced = debounce(fn, 500);

		debounced('test');
		expect(fn).not.toBeCalled(); // ще не викликано

		jest.advanceTimersByTime(500);
		expect(fn).toBeCalledTimes(1);
		expect(fn).toBeCalledWith('test');
	});

	it('should reset timer if called again before delay', () => {
		const fn = jest.fn();
		const debounced = debounce(fn, 500);

		debounced('first');
		jest.advanceTimersByTime(300);
		debounced('second');

		jest.advanceTimersByTime(300);
		expect(fn).not.toBeCalled();

		jest.advanceTimersByTime(200);
		expect(fn).toBeCalledTimes(1);
		expect(fn).toBeCalledWith('second');
	});
});
