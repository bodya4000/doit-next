'use client';

import { PrimaryButton, PrimaryTransparentButton } from '@/components';
import { useThemeMode } from '@/providers';
import { Typography, useTheme } from '@mui/material';
import { ButtonContainer, CenteredContent, GradientSection, OuterWrapper } from '.';

const Welcome = () => {
	const theme = useTheme();
	const { mode } = useThemeMode();
	return (
		<OuterWrapper>
			<GradientSection mode={mode}>
				<CenteredContent>
					<Typography
						color={theme.palette.text.primary}
						fontWeight={300}
						align='center'
						sx={{ fontSize: { xs: 20, sm: 28, md: 36, lg: 42 } }}
					>
						Ласкаво просимо до DOiT MVP
					</Typography>
					<Typography
						color={theme.palette.text.primary}
						align='center'
						sx={{ fontSize: { xs: 12, sm: 10, md: 10, lg: 15 } }}
					>
						Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
					</Typography>
				</CenteredContent>

				<ButtonContainer>
					<PrimaryButton icon='list' title='ПЕРЕГЛЯНУТИ ПОСТИ' />
					<PrimaryTransparentButton icon='plus' title='ДОДАТИ ПОСТ' />
				</ButtonContainer>
			</GradientSection>
		</OuterWrapper>
	);
};

export default Welcome;
