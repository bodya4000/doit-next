import { Modal, ModalProps, SxProps, Theme } from '@mui/material';
import { ReactElement } from 'react';
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from './styled';

interface Props extends Partial<ModalProps>{
	onClose?: () => void;
	renderHeader?: () => ReactElement;
	renderBody?: () => ReactElement;
	renderFooter?: () => ReactElement;

	containerSx?: SxProps<Theme>;
	headerSx?: SxProps<Theme>;
	bodySx?: SxProps<Theme>;
	footerSx?: SxProps<Theme>;
}

const AppModal = ({
	onClose,
	renderHeader,
	renderBody,
	renderFooter,
	containerSx,
	headerSx,
	bodySx,
	footerSx,
	open,
	...rest
}: Props) => {
	return (
		<Modal
			open={open ?? true} 
			onClose={onClose}

			{...rest}
		>
			<ModalContainer sx={containerSx}>
				{renderHeader && <ModalHeader sx={headerSx}>{renderHeader()}</ModalHeader>}
				{renderBody && <ModalBody sx={bodySx}>{renderBody()}</ModalBody>}
				{renderFooter && <ModalFooter sx={footerSx}>{renderFooter()}</ModalFooter>}
			</ModalContainer>
		</Modal>
	);
};


export default AppModal;