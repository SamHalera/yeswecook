"use client"

import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import React from "react"

export const SearchBarComponent = ({ value, setValue }: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) => {


    return (
        <div className="self-center">
            <InputGroup>
                <InputGroupInput onChange={(e) => {
                    setValue(e.target.value)
                }} value={value} type="text" placeholder="Recherche une recette ..." />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}