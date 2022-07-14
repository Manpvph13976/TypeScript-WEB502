import instance from "./config.ts";

export const getAll = () => {
    const uri = "/pokemons"
    return instance.get(uri)
}
export const get = (id) => {
    const uri = `/pokemons/${id}`
    return instance.get(uri)
}