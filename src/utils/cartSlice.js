import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
        name: 'cart', // name of the slice
        initialState: {
            items: []
        },
        reducers: {  // writing reducer functions corresponding to those actions
            // actions - add, remove, clear items form cart
            // actions - you can think of them as little APIs
            // addItem - action, () => {} - reducer function(modifies your cart i.e slice of your store --> how? --> as it is having access to state, action)
            // now it modifies based on action
                addItem: (state, action) => { 
                    // modifying the state here 
                    state.items.push(action.payload)      
                },
                removeItem: (state, action) => {
                    state.items.pop();
                },
                clearCart: (state, action) => {
                    state.items.length = 0;
                }
        }
})

// need to export two things, 
// action and reducers

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;