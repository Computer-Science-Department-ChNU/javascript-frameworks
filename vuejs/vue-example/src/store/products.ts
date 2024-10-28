import {defineStore} from 'pinia';
import axios from 'axios';
import type {Product} from "@/types/product";

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [] as Product[],
        loading: true,
    }),
    actions: {
        async fetchProducts() {
            const limit = 10;
            const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
            this.products = response.data.products as Product[];
            this.loading = false;
        },
        addProduct(product: Product) {
            this.products.push(product);
        },
        removeProduct(productId: number) {
            this.products = this.products.filter((product) => product.id !== productId);
        },
        sortProducts() {
            this.products = this.products.sort((a, b) => a.price - b.price);
        }
    }
});
