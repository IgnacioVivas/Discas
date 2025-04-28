import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { nunito, poppins } from '../ui/fonts';

interface MyCardProps extends React.ComponentProps<typeof Card> {
	nombre: string;
	descripcion: string;
	imagen: string;
	edad: number;
	genero: string;
}

const MyCard: React.FC<MyCardProps> = ({ className, nombre, descripcion, imagen, edad, genero, ...props }) => {
	return (
		<Card className={cn('w-full max-w-[380px] h-[500px]', className)} {...props}>
			<CardContent className="grid gap-4">
				<div className=" flex items-center space-x-4 rounded-md relative ">
					<Image
						src={imagen}
						alt="perro"
						className="rounded-t-xl object-cover w-full h-80 saturate-150 brightness-100"
						width={400}
						height={400}
					/>
					<span
						className={`absolute bottom-0 left-[-16px] bg-amber-200 px-4 py-2 rounded-tr-lg ml-0 font-semibold cursor-default ${poppins.className}`}
					>
						{nombre}
					</span>
				</div>
			</CardContent>
			<CardHeader>
				<CardTitle>
					{genero} <span className="font-normal">- (Edad: {edad} años)</span>
				</CardTitle>
				<CardDescription>{descripcion.length > 100 ? descripcion.slice(0, 100) + '...' : descripcion}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button className={`w-full ${nunito.className}`}>Adoptame</Button>
			</CardFooter>
		</Card>
	);
};

export default MyCard;
