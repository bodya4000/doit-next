'use client';

import { PrimaryButton, PrimaryTransparentButton } from '@/components';
import { useThemeMode } from '@/providers';
import { Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ButtonContainer, CenteredContent, GradientSection, OuterWrapper } from '.';

const Welcome = () => {
	const theme = useTheme();
	const router = useRouter();
	const { mode } = useThemeMode();

	const onPostsClick = () => {
		router.push('/posts');
	};

	const onCreatePostClick = () => {
		router.push('/posts/create');
	};
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
					<PrimaryButton onClick={onPostsClick} icon='list' title='ПЕРЕГЛЯНУТИ ПОСТИ' />
					<PrimaryTransparentButton onClick={onCreatePostClick} icon='plus' title='ДОДАТИ ПОСТ' />
				</ButtonContainer>
			</GradientSection>
		</OuterWrapper>
	);
};

export default Welcome;
