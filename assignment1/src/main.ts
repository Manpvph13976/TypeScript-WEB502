import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/admin'
import AddProductPage from './pages/admin/Product/add'
import EditProductPage from './pages/admin/Product/edit'

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
    render: (params) => Promise<string>;
    afterRender?: (params) => void
}

const print = async (component: ComponentBase, params?: any) => {
    document.getElementById('app').innerHTML = await component.render(params)
    if (component.afterRender) {
        component.afterRender(params)
    }
}

router.on({
    "/": () => {
        print(HomePage)
    },
    "/admin": () => {
        print(AdminPage)
    },
    "/admin/products/add": () => {
        print(AddProductPage)
    },
    "/admin/products/:id/edit": (data) => {
        print(EditProductPage, data.data.id)
    },
})
router.resolve()