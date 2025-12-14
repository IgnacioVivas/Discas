import Image from 'next/image';

interface CardProps {
	icon: string;
	title: string;
	description: React.ReactNode;
}

const InfoCard = ({ icon, title, description }: CardProps) => {
	return (
		<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center border border-teal-300/40">
			<div className="flex justify-center mb-4">
				<Image src={icon} alt="discas" width={72} height={72} className="shrink-0" />
			</div>

			<h3 className="font-bold text-lg text-teal-900">{title}</h3>

			<p className="text-stone-600 text-sm mt-2 leading-relaxed">{description}</p>
		</div>
	);
};

export default InfoCard;
