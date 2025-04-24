'use client';

import { TouchableOpacity } from '@/components/buttons';
import { BinIcon, Icon } from '@/components/icons';
import { Box, useTheme } from '@mui/material';
import { PostAvatar, PostCard, PostHeader, PostText, PostTitle, PostWrapper } from '.';

const Post = () => {
	const theme = useTheme();
	return (
		<PostCard>
			<PostWrapper sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader>
					<PostAvatar></PostAvatar>
					<PostTitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto neque reprehenderit
						incidunt. Odit architecto nobis exercitationem explicabo ullam maiores ducimus impedit
						quo quis possimus! Perspiciatis quidem culpa quam esse magnam.
					</PostTitle>

					<TouchableOpacity sx={{ alignItems: 'flex-start' }}>
						<BinIcon />
					</TouchableOpacity>
				</PostHeader>
				<PostText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto neque reprehenderit
					incidunt. Odit architecto nobis exercitationem explicabo ullam maiores ducimus impedit quo
					quis possimus! Perspiciatis quidem culpa quam esse magnam.
				</PostText>

				<TouchableOpacity
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
				>
					<Box
						sx={{
							width: 30,
							height: 30,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
					>
						<Icon sx={{color:theme.palette.text.primary}} name='arrow-right' />
					</Box>
				</TouchableOpacity>
			</PostWrapper>
		</PostCard>
	);
};

export default Post;
