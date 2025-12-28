import { PrismaClient } from '../lib/generated/prisma/client';
import bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
	const passwordHash = await bcrypt.hash('HolaMundo2026!', 12);

	await prisma.user.upsert({
		where: { email: 'discasrodandoporlavida@gmail.com' },
		update: {
			password: passwordHash, // 🔑 actualiza si ya existe
		},
		create: {
			email: 'discasrodandoporlavida@gmail.com',
			nombre: 'Discas',
			rol: 'admin',
			password: passwordHash,
		},
	});

	console.log('✅ Usuario admin sembrado correctamente');
}

main()
	.catch(console.error)
	.finally(async () => prisma.$disconnect());
