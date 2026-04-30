"use client"
import { Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"

import { useRouter } from "next/navigation"
import { deleteRecipe } from "@/actions/recipe/recipe-action"
import { toast } from "sonner"
import { RecipeProps } from "@/types/recipe"

export const AlertDeleteComponent = ({ elementName, recipe, authorId }: { elementName: string, recipe: RecipeProps, authorId: string }) => {

    const router = useRouter()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-red-400 w-full py-5  text-white hover:text-red-200 hover:bg-red-600 cursor-pointer font-headline font-extrabold rounded-md  transition-all active:scale-95" variant="outline"><Trash2 />Supprimer</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Es-tu sûre de vouloir supprimer cet élément ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Cette action effacer définitivement votre {elementName} de la base des données
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {

                        const author = recipe.author
                        const deleteAction = await deleteRecipe(recipe.id, authorId)

                        if (deleteAction?.status === "success") {
                            toast.success(deleteAction?.message)
                            router.push(`/community/${author?.username}`)
                        } else {
                            toast.error(deleteAction?.message)
                        }
                    }}>Continuer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}