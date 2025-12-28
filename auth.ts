import 'server-only';

import NextAuth, { type AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from '@/lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export const authOptions: AuthOptions = {
	session: {
		strategy: 'jwt', // ✅ ahora es literal, no string
	},
	providers: [
		Credentials({
			credentials: {
				email: { type: 'email' },
				password: { type: 'password' },
			},
			authorize: async (credentials) => {
				console.log('AUTHORIZE CREDENTIALS:', credentials);

				if (!credentials?.email || !credentials.password) {
					console.log('❌ faltan credenciales');
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				console.log('USER FROM DB:', user);

				if (!user) {
					console.log('❌ usuario no existe');
					return null;
				}

				const ok = await bcrypt.compare(credentials.password, user.password);
				console.log('PASSWORD OK:', ok);

				if (!ok) {
					console.log('❌ password incorrecta');
					return null;
				}

				console.log('✅ LOGIN OK');

				return {
					id: user.id,
					email: user.email,
					name: user.nombre ?? undefined,
					role: user.rol,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = (user as any).id;
				token.role = (user as any).role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				(session.user as any).id = token.id;
				(session.user as any).role = token.role;
			}
			return session;
		},
	},
};

export const auth = NextAuth(authOptions);
