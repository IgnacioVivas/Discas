import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Discas - Rescatamos animales con discapacidad en Córdoba';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '1200px',
					height: '630px',
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					overflow: 'hidden',
					fontFamily: 'sans-serif',
					background: 'linear-gradient(135deg, #0f4c4c 0%, #0d3d3d 40%, #1a2e2e 100%)',
				}}
			>
				{/* Círculos decorativos de fondo */}
				<div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(20, 184, 166, 0.15)', display: 'flex' }} />
				<div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', display: 'flex' }} />
				<div style={{ position: 'absolute', top: '200px', right: '150px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(20, 184, 166, 0.08)', display: 'flex' }} />

				{/* Línea superior decorativa */}
				<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #14b8a6, #f59e0b, #ec4899, #14b8a6)', display: 'flex' }} />

				{/* Huellas decorativas */}
				<div style={{ position: 'absolute', top: '40px', right: '60px', fontSize: '80px', opacity: 0.08, display: 'flex' }}>🐾</div>
				<div style={{ position: 'absolute', bottom: '60px', right: '120px', fontSize: '60px', opacity: 0.06, display: 'flex' }}>🐾</div>
				<div style={{ position: 'absolute', top: '180px', left: '40px', fontSize: '50px', opacity: 0.06, display: 'flex' }}>🐾</div>

				{/* Contenido principal */}
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '60px 80px', justifyContent: 'center' }}>

					{/* Badge superior */}
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
						<div style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							background: 'rgba(20, 184, 166, 0.2)',
							border: '1px solid rgba(20, 184, 166, 0.4)',
							borderRadius: '50px',
							padding: '8px 20px',
						}}>
							<span style={{ fontSize: '18px' }}>🐾</span>
							<span style={{ color: '#5eead4', fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>
								Fundación Discas · Desde 2015
							</span>
						</div>
					</div>

					{/* Título principal */}
					<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
						<span style={{
							fontSize: '110px',
							fontWeight: 900,
							letterSpacing: '-2px',
							lineHeight: 1,
							background: 'linear-gradient(90deg, #ffffff 0%, #ccfbf1 50%, #fde68a 100%)',
							backgroundClip: 'text',
							color: 'transparent',
							display: 'flex',
						}}>
							Discas
						</span>
					</div>

					{/* Subtítulo */}
					<div style={{ display: 'flex', marginBottom: '36px' }}>
						<span style={{
							fontSize: '30px',
							color: '#a7f3d0',
							fontWeight: 400,
							lineHeight: 1.4,
							maxWidth: '700px',
						}}>
							Rescatamos y cuidamos animales con discapacidad en Córdoba, Argentina
						</span>
					</div>

					{/* Pills de acciones */}
					<div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
						{[
							{ emoji: '🏠', text: 'Adoptá', bg: 'rgba(20, 184, 166, 0.25)', border: 'rgba(20, 184, 166, 0.5)', color: '#5eead4' },
							{ emoji: '💛', text: 'Doná', bg: 'rgba(245, 158, 11, 0.2)', border: 'rgba(245, 158, 11, 0.4)', color: '#fde68a' },
							{ emoji: '🤝', text: 'Sé voluntario', bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.35)', color: '#f9a8d4' },
							{ emoji: '💚', text: 'Sé padrino/madrina', bg: 'rgba(34, 197, 94, 0.15)', border: 'rgba(34, 197, 94, 0.35)', color: '#86efac' },
						].map((pill) => (
							<div key={pill.text} style={{
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
								background: pill.bg,
								border: `1px solid ${pill.border}`,
								borderRadius: '50px',
								padding: '10px 22px',
							}}>
								<span style={{ fontSize: '20px' }}>{pill.emoji}</span>
								<span style={{ color: pill.color, fontSize: '20px', fontWeight: 600 }}>{pill.text}</span>
							</div>
						))}
					</div>
				</div>

				{/* Footer */}
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '20px 80px',
					borderTop: '1px solid rgba(255,255,255,0.08)',
					background: 'rgba(0,0,0,0.2)',
				}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<span style={{ fontSize: '28px' }}>📍</span>
						<span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px' }}>Córdoba Capital, Argentina</span>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<span style={{ fontSize: '28px' }}>❤️</span>
						<span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px' }}>discas.com.ar</span>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630 },
	);
}
