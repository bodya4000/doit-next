import { AppModal } from '@/components';
import { ResultModalBody, ResultModalFooter, ResultModalHeader } from '.';

const ResultModal = () => {
	return (
		<AppModal
			renderHeader={() => <ResultModalHeader />}
			renderBody={() => <ResultModalBody />}
			renderFooter={() => <ResultModalFooter />}
		/>
	);
};

export default ResultModal;
