import { deleteProduct, getProducts } from "../../api/product"
import AdminHeader from "../../components/Header/Admin"
import Sidebar from "../../components/Sidebar"
import Product from "../../model/product"
import reRender from "../../ultilities/reRender"

const AdminPage = {
    render: async () => {
        const res = await getProducts()
        const data: Product[] = res.data
        console.log(data)
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                <div class="flex items-center justify-between mb-5">
                    <h2 class="text-[#5F5E61] font-semibold text-[30px]">Điện thoại</h2>
                    <a href="/admin/products/add">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#00B0D7] mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-center">
                    <p class="text-[13px] font-semibold flex-2">Bộ lọc : </p>
                    <div class="ml-10 flex-1">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Danh mục sản phẩm</label>
                        <select id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Laptop</option>
                        <option value="2">Máy tính bảng</option>
                        <option value="3">Phụ kiện</option>
                        <option value="4">Âm thanh</option>
                        </select>
                    </div>
                </div>
                <table class="table-auto border-collapse border mt-8">
                    <thead>
                    <tr>
                        <th class="w-[5%] border p-2">#</th>
                        <th class="w-[20%] border p-2">Tên sản phẩm</th>
                        <th class="w-[10%] border p-2">Giá</th>
                        <th class="w-[15%] border p-2">Ảnh</th>
                        <th class="w-[30%] border p-2">Mô tả</th>
                        <th class="w-[10%] border text-center p-2">Ẩn hiện</th>
                        <th class="w-[10%] border p-2">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${data.map((p, index) => /*html*/`
                        <tr>
                            <td class="border text-center p-3">${index + 1}</td>
                            <td class="border p-3">${p.name}</td>
                            <td class="border p-3">${p.originalPrice}</td>
                            <td class="border p-3"><img src="${p.image}"/></td>
                            <td class="border p-3">${p.description}</td>
                            <td class="border p-3">
                                    <svg class="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 15.5C17.7849 15.5 19.2778 14.137 19.464 12.3681C19.4897 12.1245 19.4897 11.8755 19.464 11.6319C19.2778 9.86302 17.7849 8.5 16 8.5C14.2152 8.5 12.7222 9.86302 12.536 11.6319C12.5104 11.8755 12.5104 12.1245 12.536 12.3681C12.7222 14.137 14.2152 15.5 16 15.5Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9257 18.75H8.07434C4.75284 18.75 1.92497 16.3336 1.40694 13.0527C1.29681 12.3552 1.29681 11.6448 1.40694 10.9473C1.92497 7.6664 4.75285 5.25 8.07434 5.25H15.9257C19.2472 5.25 22.075 7.6664 22.5931 10.9473C22.7032 11.6448 22.7032 12.3552 22.5931 13.0527C22.075 16.3336 19.2472 18.75 15.9257 18.75ZM15.9257 17.25C18.5091 17.25 20.7085 15.3706 21.1114 12.8188C21.1971 12.2763 21.1971 11.7237 21.1114 11.1812C20.7085 8.62942 18.5091 6.75 15.9257 6.75L8.07434 6.75C5.49096 6.75 3.2915 8.62942 2.88859 11.1812C2.80293 11.7237 2.80293 12.2763 2.88858 12.8188C3.2915 15.3706 5.49095 17.25 8.07434 17.25H15.9257Z" fill="black"/>
                                    </svg>
                            </td>
                            <td class="border h-[250px] p-3 flex justify-center items-center">
                               <a href="/admin/products/${p.id}/edit" class="pr-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                 </svg>
                                </a>
                                <button id="btn-delete" data-id="${p.id}" class="pl-3">
                                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0.25C5.58579 0.25 5.25 0.585786 5.25 1V1.75H1C0.585786 1.75 0.25 2.08579 0.25 2.5C0.25 2.91421 0.585786 3.25 1 3.25H15C15.4142 3.25 15.75 2.91421 15.75 2.5C15.75 2.08579 15.4142 1.75 15 1.75H10.75V1C10.75 0.585786 10.4142 0.25 10 0.25H6Z" fill="black"/>
                                    <path d="M6 8.64999C6.41421 8.64999 6.75 8.98578 6.75 9.39999L6.75 16.4C6.75 16.8142 6.41421 17.15 6 17.15C5.58579 17.15 5.25 16.8142 5.25 16.4L5.25 9.39999C5.25 8.98578 5.58579 8.64999 6 8.64999Z" fill="black"/>
                                    <path d="M10.75 9.39999C10.75 8.98578 10.4142 8.64999 10 8.64999C9.58579 8.64999 9.25 8.98578 9.25 9.39999V16.4C9.25 16.8142 9.58579 17.15 10 17.15C10.4142 17.15 10.75 16.8142 10.75 16.4V9.39999Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99142 5.91718C2.03363 5.53735 2.35468 5.25 2.73684 5.25H13.2632C13.6453 5.25 13.9664 5.53735 14.0086 5.91718L14.2087 7.71852C14.5715 10.9838 14.5715 14.2793 14.2087 17.5446L14.189 17.722C14.045 19.0181 13.0404 20.0517 11.7489 20.2325C9.26176 20.5807 6.73823 20.5807 4.25108 20.2325C2.95954 20.0517 1.955 19.0181 1.81098 17.722L1.79128 17.5446C1.42846 14.2793 1.42846 10.9838 1.79128 7.71852L1.99142 5.91718ZM3.40812 6.75L3.2821 7.88417C2.93152 11.0394 2.93152 14.2238 3.2821 17.379L3.3018 17.5563C3.37011 18.171 3.84652 18.6612 4.45905 18.747C6.80822 19.0758 9.19177 19.0758 11.5409 18.747C12.1535 18.6612 12.6299 18.171 12.6982 17.5563L12.7179 17.379C13.0685 14.2238 13.0685 11.0394 12.7179 7.88417L12.5919 6.75H3.40812Z" fill="black"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>         
            </div>
        </div>
        `
    },
    afterRender: async () => {
        const btns = document.querySelectorAll("#btn-delete")
        for (let btn of btns) {
            const id = btn.dataset.id
            btn.addEventListener("click", async () => {
                const confirm = window.confirm("Bạn có chắc muốn xóa không?")
                if (confirm) {
                    const data = await deleteProduct(id)
                    if (data) alert("Xóa thành công")
                    reRender("#app", AdminPage)
                }
            })
        }
    }
}

export default AdminPage