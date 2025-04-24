import { SpeedDial, SpeedDialIcon } from '@mui/material';

const PostSpeedDial = () => {
	return (
		<SpeedDial
			ariaLabel='Create Post'
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
			icon={<SpeedDialIcon />}
		></SpeedDial>
	);
};

export default PostSpeedDial;
