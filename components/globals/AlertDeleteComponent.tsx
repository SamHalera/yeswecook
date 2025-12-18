"use client"
import { Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"

import { useRouter } from "next/navigation"

export const AlertDeleteComponent = ({ elementName, deleteAction }: { elementName: string, deleteAction: () => void }) => {

    const router = useRouter()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-red-300" variant="outline"><Trash2 />Supprimer</Button>
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

                        try {
                            await deleteAction()
                            router.push('/admin/recipes')
                        } catch (error) {
                            console.log('error==>', error)
                        }
                    }}>Continuer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}