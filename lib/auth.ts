import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';



export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'メールアドレス', type: 'email' },
                password: { label: 'パスワード', type: 'password' },
            },
            async authorize(credentials) {
                // ここは一時的なダミー実装（DBは使わない）
                const user = {
                    id: 'dummy-id',
                    name: 'Guest User',
                    email: credentials?.email || 'guest@example.com',
                };

                return user;
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as { role?: string }).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as { role?: string }).role = token.role as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
};
