import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import perro from '@/image/perro.jpg';
import { nunito, poppins } from '../ui/fonts';

interface MyCardProps extends React.ComponentProps<typeof Card> {
	nombre: string;
	descripcion: string;
	imagen: string;
}
// nombre, descripcion, imagen,
const MyCard: React.FC<MyCardProps> = ({ className, ...props }) => {
	return (
		<Card className={cn('w-full max-w-[380px]', className)} {...props}>
			<CardContent className="grid gap-4">
				<div className=" flex items-center space-x-4 rounded-md relative ">
					<Image src={perro} alt="perro" className="rounded-t-xl" />
					<span
						className={`absolute bottom-0 left-[-16px] bg-amber-200 px-4 py-2 rounded-tr-lg ml-0 font-semibold cursor-default ${poppins.className}`}
					>
						Procer
					</span>
				</div>
			</CardContent>
			<CardHeader>
				<CardTitle className="cursor-default">
					Lorem Ipsum <span className="font-normal">- (Edad: 3 años)</span>
				</CardTitle>
				<CardDescription className="cursor-default">
					Tempus curabitur urna donec arcu felis mus litora neque aliquam. A vestibulum ut vehicula eget scelerisque
					diam quam facilisi netus.
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button className={`w-full ${nunito.className}`}>Adoptame</Button>
			</CardFooter>
		</Card>
	);
};

export default MyCard;
