"use client"

import { Header, PageContainer, Welcome } from '@/components';

export default function Home() {
	return (
		<>
			<Header />
			<PageContainer>
				<Welcome />
			</PageContainer>
		</>
	);
}
