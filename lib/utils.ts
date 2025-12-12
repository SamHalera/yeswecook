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
    console.log("error in lib=>", error)
    const errorFounded = error.find((elt) => elt[keyToExtract])

    // console.log("error in libs==>", errorFounded[keyToExtract])
    if (errorFounded) return errorFounded[keyToExtract]
  }
  return null;
};