import Product from "../model/product";
import instance from "./instance";

export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}

export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}

export const getProduct = (id) => {
    const url = `/products/${id}`
    return instance.get(url)
}

export const updateProduct = (product) => {
    const url = `/products/${product.id}`
    return instance.put(url, product)
}

export const deleteProduct = (id) => {
    const url = `/products/${id}`
    return instance.delete(url)
}