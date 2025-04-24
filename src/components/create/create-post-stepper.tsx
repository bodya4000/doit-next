import { steps } from '@/assets/data';
import { useAppSelector } from '@/hooks';
import { Box, Step, StepLabel, Stepper } from '@mui/material';

const CreatePostStepper = () => {
	const step = useAppSelector(state => state.createPost.step);
	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={step - 1} alternativeLabel>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default CreatePostStepper;
