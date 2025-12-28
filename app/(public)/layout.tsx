import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import DonationDialog from '@/components/myComponents/DonationDialog';
import WhatsAppButton from '@/components/myComponents/WhatsAppButton';
import React from 'react';

function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<WhatsAppButton />
			<DonationDialog />
			<Footer />
		</>
	);
}

export default PublicLayout;
