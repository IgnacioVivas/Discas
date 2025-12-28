import HeaderDos from '@/components/layout/HeaderDos';

export default function AdoptaLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderDos title="Conócelos y enamórate" description="Adoptar es cambiar una vida para siempre." />
			<main className="flex-1">{children}</main>
		</div>
	);
}
