import { getAll } from "../api/pokemon"
import Pokemon from "../models/pokemon"

const HomePage = {
    render: async () => {
        const data = await getAll()
        const pokemons: Pokemon[] = data.data
        console.log(data);
        return `
     
     <div class="max-w-7xl mx-auto grid grid-cols-5 gap-3">
        ${pokemons.map(poke =>
            ` <a href="/pokemon/${poke.id}">
              <img src="${poke.image}" alt="">
              <h3>${poke.name}</h3>
              <div class="flex">
            ${poke.type.map(t => /*html*/`
              <div class="${t.type.name}">
                ${t.type.name}
              </div>`).join('|')}
          </div>
           </a>`
        ).join("")}
     </div>
     
    `
    }
}
export default HomePage