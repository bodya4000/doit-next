'use client';

import { SpeedDial, SpeedDialIcon } from '@mui/material';
import { useRouter } from 'next/navigation';

const PostSpeedDial = () => {
	const router = useRouter();
	return (
		<SpeedDial
			onClick={() => router.push('posts/create')}
			ariaLabel='Create Post'
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
			icon={<SpeedDialIcon />}
		></SpeedDial>
	);
};

export default PostSpeedDial;
