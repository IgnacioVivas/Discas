import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { inter, nunito, poppins } from '../ui/fonts';

function MySuscripcion({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card className="p-10 bg-custom-red border-0">
				<CardHeader className="p-0">
					<CardTitle className={`text-2xl text-white ${poppins.className}`}>SUSCRÍBETE AL NEWSLETTER</CardTitle>
					<CardDescription className={`text-white font-inter`}>
						Para recibir las últimas novedades sobre adopción y cuidados, suscríbete al boletín de Discas.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="my-5" />
					<form>
						<div className="flex flex-col gap-3">
							<div className="grid gap-2">
								<Input className="bg-white" id="email" type="email" placeholder="m@example.com" required />
							</div>

							<Button type="submit" className={`w-full bg-custom-yellow hover:bg-teal-950 ${nunito.className}`}>
								Iniciar sesión
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

export default MySuscripcion;
