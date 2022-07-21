import Navigo from 'navigo'
import DetailPage from './pages/detalil'
import HomePage from './pages/home'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const print = async (component: ComponentBase, id) => {
  app.innerHTML = await component.render(id)
}

interface ComponentBase {
  render: () => any
}

const router = new Navigo("/", { linksSelector: "a" })
router.on({
  "/": () => {
    print(HomePage)
  },
  "/pokemon/:id": (data) => {
    print(DetailPage, data.data.id)
    console.log(data.data.id);
  }
})
router.resolve()

