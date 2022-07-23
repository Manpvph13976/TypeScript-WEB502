import { upload } from "../../../api/image"
import { getProduct, updateProduct } from "../../../api/product"
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"
import Product from "../../../model/product"

const EditProductPage = {
    render: async (id) => {
        const { data } = await getProduct(id)
        console.log(data)
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4">
            <div class="w-[250px] flex-none ">
                ${Sidebar.render()}
            </div>
            <div class="grow border-l border-[#E5E5E5]">
                <h3 class="ml-8 mb-5 text-[30px] font-semibold">Sửa sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8 ml-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px] w-full overflow-hidden">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#00B0D7]" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                        <img id="preview-image" class="z-0" src="${data.image}"/>
                    </label>
                    <div class="mt-4">Thêm ảnh</div>
                    </div>
                    <div class="mt-3">
                        <label for="">Mô tả ngắn</label>
                        <textarea class="w-full border outline-none h-[80px]" id="short-description">${data.shortDescription}</textarea>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="text-[20px] font-medium border-b mb-4 pb-4">Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-sm h-10" value="${data.name}">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col">
                        <label for="">Giá gốc:</label>
                        <input id="originalPrice" type="text" placeholder="Giá gốc" class="w-full border rounded-sm h-10" value="${data.originalPrice}">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Giá khuyến mãi:</label>
                        <input id="promotion-price" type="text" placeholder="Giá khuyến mãi" class="w-full border rounded-sm h-10" value="${data.saleOffPrice}">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Danh mục sản phẩm</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Laptop">Laptop</option>
                        <option value="Máy tính bảng">Máy tính bảng</option>
                        <option value="Phụ kiện">Phụ kiện</option>
                        <option value="Âm thanh">Âm thanh</option>
                        <option value="Điện thoại">Điện thoại</option>
                        </select>
                    </div>
                    </div>
                    <div class="mb-4">
                        <label for="">Đặc điểm nổi bật</label>
                        <textarea class="w-full h-[120px] outline-none border" id="salient-features">${data.feature}</textarea>
                    </div>
                    <div>
                        <label for="">Mô tả dài</label>
                        <textarea class="w-full h-[120px] outline-none border" id="long-description">${data.description}</textarea>
                    </div>
                </div>
                <button class="text-white rounded-md bg-[#00B0D7] w-[100px] h-[40px]" id="edit-product-btn">Sửa</button>
                </div>
            </div>
        </div>
        `
    },
    afterRender: async (id) => {
        const editProduct = document.querySelector('#edit-product-btn')
        const inputFile = document.querySelector('#input-file')
        const previewImage = document.querySelector('#preview-image')

        editProduct?.addEventListener('click', async () => {
            const product = {
                id: id,
                name: document.querySelector('#name')?.value,
                originalPrice: document.querySelector('#originalPrice')?.value,
                image: previewImage?.src,
                category: document.querySelector("#category")?.value,
                feature: document.querySelector('#salient-features')?.value,
                description: document.querySelector('#long-description')?.value,
                saleOffPrice: document.querySelector('#promotion-price')?.value,
                shortDescription: document.querySelector('#short-description')?.value
            }
            try {
                const data = await updateProduct(product)
                if (data) alert('Sửa thành công')
                location.href = ("/admin")
            } catch (err) {
                console.log(err)
            }
        })

        inputFile?.addEventListener('change', async (e) => {
            // console.log(e.target.files)
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                try {
                    const res = await upload(reader.result)
                    const data = res.data
                    previewImage.src = data.url
                } catch (err) {
                    console.log(err)
                }
            }
        })

    }
}

export default EditProductPage