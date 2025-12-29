'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, PawPrint, Loader2, Eye, EyeOff, Heart, Shield, Sparkles, Cat, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { LoginFormValues, loginSchema } from '@/schemas/login';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		setError('');

		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		if (res?.error) {
			setError('Credenciales incorrectas');
			return;
		}

		router.push('/dashboard');
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-teal-50 via-amber-50/50 to-pink-50/30 flex items-center justify-center p-4 overflow-hidden">
			{/* Elementos decorativos flotantes */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute"
						initial={{
							y: Math.random() * 100,
							x: Math.random() * 100,
						}}
						animate={{
							y: [null, Math.random() * 100 + 50],
							x: [null, Math.random() * 100 + 50],
						}}
						transition={{
							duration: 20 + Math.random() * 10,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<div
							className={`text-4xl opacity-10 ${
								i % 3 === 0 ? 'text-teal-400' : i % 3 === 1 ? 'text-amber-400' : 'text-pink-400'
							}`}
						>
							{i % 2 === 0 ? '🐾' : i % 3 === 0 ? '🐕' : '🐈'}
						</div>
					</motion.div>
				))}
			</div>

			{/* Patrones de fondo */}
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full blur-3xl" />
			</div>

			{/* Logo y título flotante */}
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="absolute top-8 left-8 flex items-center gap-3 z-10"
			>
				<div className="relative">
					<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full blur-xl opacity-30" />
					<div className="relative w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
						<PawPrint className="w-6 h-6 text-white" />
					</div>
				</div>
				<div>
					<h1 className="text-2xl font-bold bg-gradient-to-r from-teal-700 via-amber-600 to-teal-700 bg-clip-text text-transparent">
						Discas Admin
					</h1>
					<p className="text-xs text-gray-500 font-medium">Fundación Animales Especiales</p>
				</div>
			</motion.div>

			{/* Tarjeta principal */}
			<motion.div
				initial={{ scale: 0.95, opacity: 0, y: 20 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative w-full max-w-lg z-20"
			>
				{/* Efecto de brillo alrededor */}
				<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-amber-400 to-pink-400 rounded-3xl blur-2xl opacity-20" />

				<Card className="relative border-0 shadow-2xl backdrop-blur-sm bg-white/95">
					{/* Encabezado con diseño especial */}
					<CardHeader className="text-center pt-10 pb-6">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: 'spring' }}
							className="relative mb-6"
						>
							<div className="absolute -inset-6 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full blur-xl opacity-30" />
							<div className="relative w-14 h-14 mx-auto bg-gradient-to-br from-teal-500 via-teal-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
								<div className="relative">
									<Lock className="w-6 h-6 text-white" />

									<Shield className="w-3 h-3 text-white absolute -top-2 -right-2" />
								</div>
							</div>
						</motion.div>

						<CardTitle className="text-3xl font-bold mb-2">
							<span className="bg-gradient-to-r from-teal-700 via-amber-600 to-teal-700 bg-clip-text text-transparent">
								Panel de Administración
							</span>
						</CardTitle>

						<CardDescription className="text-lg text-gray-600">
							<div className="flex items-center justify-center gap-2">
								<Sparkles className="w-4 h-4 text-amber-500" />
								<span>Acceso exclusivo al equipo Discas</span>
								<Sparkles className="w-4 h-4 text-amber-500" />
							</div>
						</CardDescription>
					</CardHeader>

					<CardContent className="px-8 py-2">
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
							{/* Campo Email */}
							<motion.div
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="space-y-2"
							>
								<label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
									<Mail className="w-4 h-4 text-teal-600" />
									Correo Electrónico
								</label>
								<div className="relative group">
									<div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
									<div className="relative">
										<Input
											type="email"
											{...register('email')}
											placeholder="admin@fundaciondiscas.org"
											className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 bg-white/50 backdrop-blur-sm rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-200 transition-all"
											required
										/>
										<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500" />
									</div>
									{errors.email && <p className="text-sm text-red-600 font-medium">{errors.email.message}</p>}
								</div>
							</motion.div>

							{/* Campo Contraseña */}
							<motion.div
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="space-y-2"
							>
								<label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
									<Lock className="w-4 h-4 text-teal-600" />
									Contraseña
								</label>
								<div className="relative group">
									<div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-pink-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
									<div className="relative">
										<Input
											type={showPassword ? 'text' : 'password'}
											{...register('password')}
											placeholder="••••••••••"
											className="pl-12 pr-12 py-6 text-lg border-2 border-gray-200 bg-white/50 backdrop-blur-sm rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
											required
										/>
										<Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
										>
											{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
										</button>
									</div>
									{errors.password && <p className="text-sm text-red-600 font-medium">{errors.password.message}</p>}
								</div>
							</motion.div>

							{/* Mensaje de error */}
							{error && (
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-sm"
								>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
										<p className="text-red-700 font-medium">{error}</p>
									</div>
								</motion.div>
							)}

							{/* Botón de envío */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="pt-4"
							>
								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
								>
									{/* Efecto de fondo animado */}
									<div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-amber-500 group-hover:from-teal-700 group-hover:via-teal-600 group-hover:to-amber-600 transition-all duration-500" />
									<div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									{/* Contenido del botón */}
									<span className="relative z-10 flex items-center justify-center gap-3">
										{isSubmitting ? (
											<>
												<Loader2 className="w-5 h-5 animate-spin" />
												<span>Verificando credenciales...</span>
											</>
										) : (
											<>
												<Shield className="w-5 h-5" />
												<span>Acceder al Panel</span>
												<Sparkles className="w-5 h-5" />
											</>
										)}
									</span>
								</Button>
							</motion.div>
						</form>

						{/* Separador decorativo */}
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ delay: 0.6 }}
							className="relative my-8"
						>
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-200"></div>
							</div>
							<div className="relative flex justify-center">
								<span className="px-4 bg-white text-sm text-gray-500 font-medium">
									<div className="flex items-center gap-2">
										<Heart className="w-4 h-4 text-pink-500" />
										Protegiendo vidas especiales
										<Heart className="w-4 h-4 text-pink-500" />
									</div>
								</span>
							</div>
						</motion.div>

						{/* Información adicional */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
							className="text-center"
						>
							<p className="text-sm text-gray-600 mb-2">Este acceso es exclusivo para el equipo de la fundación</p>
							<div className="flex items-center justify-center gap-4 text-xs text-gray-500">
								<div className="flex items-center gap-1">
									<Dog className="w-3 h-3" />
									<span>Rescate</span>
								</div>
								<div className="w-1 h-1 bg-gray-300 rounded-full" />
								<div className="flex items-center gap-1">
									<Cat className="w-3 h-3" />
									<span>Rehabilitación</span>
								</div>
								<div className="w-1 h-1 bg-gray-300 rounded-full" />
								<div className="flex items-center gap-1">
									<Heart className="w-3 h-3 text-pink-500" />
									<span>Adopción</span>
								</div>
							</div>
						</motion.div>
					</CardContent>
				</Card>
			</motion.div>

			{/* Elementos decorativos inferiores */}
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.8 }}
				className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-gray-500"
			>
				<div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
				<span>Conexión segura • Sistema encriptado</span>
			</motion.div>
		</div>
	);
}
