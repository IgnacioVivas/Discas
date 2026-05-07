import 'server-only';

import NextAuth, { type AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: AuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		Credentials({
			credentials: {
				email: { type: 'email' },
				password: { type: 'password' },
			},
			authorize: async (credentials) => {
				if (!credentials?.email || !credentials.password) return null;

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user) return null;

				const ok = await bcrypt.compare(credentials.password, user.password);
				if (!ok) return null;

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
