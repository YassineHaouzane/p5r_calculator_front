export const enum Arcana {
    Fool = "Fool",
    Magician = "Magician",
    Priestess = "Priestess",
    Empress = "Empress",
    Emperor = "Emperor",
    Hierophant = "Hierophant",
    Lovers = "Lovers",
    Chariot = "Chariot",
    Justice = "Justice",
    Hermit = "Hermit",
    Fortune = "Fortune",
    Strength = "Strength",
    Hanged = "Hanged",
    Death = "Death",
    Temperance = "Temperance",
    Devil = "Devil",
    Tower = "Tower",
    Star = "Star",
    Moon = "Moon",
    Sun = "Sun",
    Judgement = "Judgement",
    World = "World",
    Councillor = "Councillor",
    Faith = "Faith",
}

export interface Persona  {
    name: string,
    level: number
    arcana: Arcana,
    rare: boolean | undefined,
    special: boolean | undefined,
}

export type Recipe = {
    sources: Persona[],
    result: Persona,
    cost: number,
}

export type Recipes = Recipe[]