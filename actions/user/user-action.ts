import prisma from "@/lib/prisma"


export const getUserFromDB = async (username: string) => {

    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        return user

    } catch (error) {
        console.error("Error==>", error)
    }
}