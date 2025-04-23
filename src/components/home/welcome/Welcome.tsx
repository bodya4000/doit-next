'use client';

import { PrimaryButton, PrimaryTransparentButton } from '@/components';
import { Typography, useTheme } from '@mui/material';
import { ButtonContainer, CenteredContent, GradientSection, OuterWrapper } from '.';

const Welcome = () => {
	const theme = useTheme();
	return (
		<OuterWrapper>
			<GradientSection>
				<CenteredContent>
					<Typography fontWeight={300} align='center' variant='h3'>
						Ласкаво просимо до DOiT MVP
					</Typography>
					<Typography color={theme.palette.text.primary} align='center' variant='body1'>
						Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
					</Typography>

					<ButtonContainer>
						<PrimaryButton icon='list' title='ПЕРЕГЛЯНУТИ ПОСТИ' />
						<PrimaryTransparentButton icon='plus' title='ДОДАТИ ПОСТ' />
					</ButtonContainer>
				</CenteredContent>
			</GradientSection>
		</OuterWrapper>
	);
};

export default Welcome;
