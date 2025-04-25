import { useAppSelector } from '@/hooks';
import { nextStep, openResultModal, prevStep } from '@/store/create-post-slice';
import { useDispatch } from 'react-redux';
import { PostBodyField, PostTitleField } from '.';
import { PrimaryButton, PrimaryTransparentButton } from '../buttons';
import CreatePostStepper from './create-post-stepper';
import { FormButtonsContainer, FormView, FormWrapper } from './styled';

const CreatePostForm = () => {
	const step = useAppSelector(state => state.createPost.step);
	const dispatch = useDispatch();
	const onNextClick = () => {
		if (step < 3) {
			dispatch(nextStep());
		} else {
			dispatch(openResultModal());
		}
	};

	const onPrevClick = () => {
		dispatch(prevStep());
	};
	return (
		<FormWrapper>
			<FormView>
				<CreatePostStepper />

				{step == 1 && <PostTitleField />}
				{step == 2 && <PostBodyField />}

				<FormButtonsContainer>
					<PrimaryTransparentButton onClick={onPrevClick} disabled={step == 1} title='НАЗАД' />
					<PrimaryButton onClick={onNextClick} title={step < 3 ? 'Далі' : 'Зберегти'} />
				</FormButtonsContainer>
			</FormView>
		</FormWrapper>
	);
};

export default CreatePostForm;
