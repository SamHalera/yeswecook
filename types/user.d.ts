type UserProps = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
    imageSrc?: string | null | undefined;
    imagePublicId?: string | null | undefined;
    bio?: string | null
} | undefined

type userMediaProps = {
    imageSrc: string | null | undefined,
    imagePublicId: string | null | undefined,
}