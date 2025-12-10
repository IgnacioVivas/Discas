import Image from 'next/image';
interface HeaderDosProps {
	title: string;
	description: string;
	image?: string;
}

function HeaderDos({ title, description, image = '/image/baners/baner-1.jpg' }: HeaderDosProps) {
	return (
		<div className="h-screen w-full relative flex flex-col mb-32">
			{/* <div className="relative w-full h-[500px]"> */}
			<Image src={image} alt="banner disca" fill className="object-cover object-center" priority />
			<div className="absolute inset-0 bg-teal-950/30"></div>

			<div className="px-5 absolute inset-0 flex flex-col items-center justify-center">
				<h1 className="text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins text-center px-4">
					{title}
				</h1>
				<p className="text-center text-lg lg:text-2xl mt-2 drop-shadow-sm font-medium font-inter text-white">
					{description}
				</p>
			</div>
			{/* </div> */}
		</div>
	);
}

export default HeaderDos;
