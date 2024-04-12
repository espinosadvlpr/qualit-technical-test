import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios, { AxiosResponse } from 'axios';

interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    createdAt: string;
}

async function getUser(email: string, password: string): Promise<User | undefined> {
    const userData = {
        email: email,
        password: password
    }

    try {
        const response: AxiosResponse<User> = await axios.post('http://localhost:3000/users/login', userData)
        return response.data
    } catch (error) {
        console.error('Failed to fetch user:', error)
        throw new Error('Failed to fetch user:')
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email, password);
                    if (!user) return null;
                }
                return null;
            },
        })
    ],
});