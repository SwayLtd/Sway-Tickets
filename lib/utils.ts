import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Exemple d'implémentation de useStorageUrl
export function useStorageUrl(storageId?: string): string | undefined {
  // Par exemple, renvoyer une URL construite à partir de l'identifiant
  return storageId ? `https:/wary-dodo-454.convex.cloud/${storageId}` : undefined;
}
