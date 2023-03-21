import type { Persona } from "@/data/types";

let personasRef : undefined| Persona[] = undefined;

const API_URL = import.meta.env.VITE_APP_API_URI;

// Cached global data
export async function globalPersonas() {
    if (!personasRef) {
        personasRef = await (await fetch(`${API_URL}/personas`)).json();
    }
    return personasRef;
}

export async function getPersonaRecipes(persona: Persona) {
    if (persona) {
        return await (await fetch(`${API_URL}/recipes/${persona.name}`)).json();
    }
}