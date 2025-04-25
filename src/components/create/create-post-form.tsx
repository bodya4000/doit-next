import { useAppSelector } from '@/hooks';
import { nextStep, openResultModal, prevStep } from '@/store/create-post-slice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { PostBodyField, PostTitleField } from '.';
import { PrimaryButton, PrimaryTransparentButton } from '../buttons';
import CreatePostStepper from './create-post-stepper';
import { FormButtonsContainer, FormView, FormWrapper } from './styled';

const CreatePostForm = () => {
	const router = useRouter();
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
		if (step == 1) {
			router.back();
		} else {
			dispatch(prevStep());
		}
	};
	return (
		<FormWrapper>
			<FormView>
				<CreatePostStepper />

				{step == 1 && <PostTitleField />}
				{step == 2 && <PostBodyField />}

				<FormButtonsContainer>
					<PrimaryTransparentButton onClick={onPrevClick} title='НАЗАД' />
					<PrimaryButton onClick={onNextClick} title={step < 3 ? 'Далі' : 'Зберегти'} icon='save' iconAtLeft={false}/>
				</FormButtonsContainer>
			</FormView>
		</FormWrapper>
	);
};

export default CreatePostForm;
