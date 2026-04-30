import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from '@/lib/prisma'


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        changeEmail: {
            enabled: true,
            sendChangeEmailConfirmation: async ({ user, newEmail, url, token }) => {
                // Send change email confirmation to the old email
            },
            updateEmailWithoutVerification: true
        },
        additionalFields: {
            bio: {
                type: "string",
                required: false,
                input: true
            },
            imageSrc: {
                type: "string",
                required: false,
                input: true
            },
            imagePublicId: {
                type: "string",
                required: false,
                input: true
            },
            username: {
                type: "string",
                required: true,
                input: true
            },
            isAdmin: {
                type: "boolean",
                required: false,
                input: false
            },
        }
    }
})