import { get } from "../api/pokemon";

const DetailPage = {
  render: async (id) => {
    const { data } = await get(id)
    console.log(data);
    return `
     <div class="max-w-7xl mx-auto flex items-center justify-center">
          <div class="text-center">
              <img src="${data.image}" alt="" class="w-[200px]">
              <h3 class="text-[24px]">${data.name}</h3>
          </div>
     </div>
    `
  }
}
export default DetailPage