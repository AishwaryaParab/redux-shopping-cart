import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.itemsList.find((item) => item.id === newItem.id);

            if(existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })

                state.totalQuantity += 1;
            }
        },
        removeFromCart(state, action) {
            const item = state.itemsList.find((item) => item.id === action.payload);
            
            if(item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice -= item.price;
            } else {
                const newItemsList = state.itemsList.filter((item) => item.id !== action.payload);
                state.itemsList = newItemsList;

                state.totalQuantity -= 1;
            }

            



        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;