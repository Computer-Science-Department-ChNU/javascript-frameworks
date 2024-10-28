// store/cart.ts
import {defineStore} from 'pinia';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
    }),
    getters: {
        totalAmount: (state) =>
            state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    },
    actions: {
        addItem(item: CartItem) {
            const existingItem = this.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push(item);
            }
        },
        removeItem(itemId: number) {
            this.items = this.items.filter((item) => item.id !== itemId);
        },
        clearCart() {
            console.log('clearCart')
            this.items = [];
        },
    },
});
