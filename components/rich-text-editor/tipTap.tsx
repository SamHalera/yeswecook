'use client'

import { NewRecipeFormType } from '@/lib/zod/recipeSchema'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { UseFormRegister } from 'react-hook-form'
import TextAlign from '@tiptap/extension-text-align'
import MenuBar from './menuBar'
import { generateText } from '@tiptap/core';

const Tiptap = ({ onChange, value }: {
    onChange: (value: string) => void,
    value: string | undefined
}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure({
            bulletList: {
                HTMLAttributes: {
                    class: "list-disc ml-3",
                },
            },
            orderedList: {
                HTMLAttributes: {
                    class: "list-decimal ml-3",
                },
            },
        }), TextAlign.configure({
            types: ['heading', 'paragraph']
        })],
        content: value,
        editorProps: {
            attributes: {
                class: "border rounded-md min-h-[150px] px-2.5 py-2",

            }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            console.log("text==>", editor.getHTML())
        },
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    })

    return (
        <div className='flex flex-col justify-stretch min-h-[250px]'>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap