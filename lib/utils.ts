import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractErrorFieldFromErrorsObject = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  error: any[] | null,
  keyToExtract: string
) => {
  if (error) {
    console.log("keyToExtract==>", keyToExtract)
    console.log("error in lib=>", error)
    const errorFounded = error.find((elt) => elt[keyToExtract])

    // console.log("error in libs==>", errorFounded[keyToExtract])
    if (errorFounded) return errorFounded[keyToExtract]
  }
  return null;
};

export const slugifyName = (name: string) => {

  if (!name || typeof name !== "string") {
    return
  }

  return name
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

