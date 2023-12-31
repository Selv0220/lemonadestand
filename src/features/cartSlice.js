import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
}
const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart (state, action)  {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id);
        if(itemIndex >= 0){
          state.cartItems[itemIndex].cartQuantity += 1;

          toast.info(`increased ${state.cartItems[itemIndex].title} quantity`,{
            position:"bottom-left",
          });
          
        } else {
          const tempProduct = {...action.payload, cartQuantity: 1};
          state.cartItems.push(tempProduct);

          toast.success(`${action.payload.title} added to cart`,{
            position:"bottom-left",
          });
        };
    },
    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;

      toast.error(`${action.payload.title} removed from cart`,{
        position: "bottom-left",
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
      cartItem => cartItem.id === action.payload.id
      )

      if(state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Decreased ${action.payload.title} cart quantity`,{
          position: "bottom-left",
        });
      } else if
      (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        );
  
        state.cartItems = nextCartItems;
  
        toast.error(`${action.payload.title} removed from cart`,{
          position: "bottom-left",
        });
      };
    },

    clearCart(state, action){
      state.cartItems = [];
      toast.error(`cart cleared`,{
        position: "bottom-left",
      });

    },

    getTotals(state, action) {
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
        const {price, cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        
        return cartTotal;
      },{
        total: 0,
        quantity: 0
      });

      state.totalQuantity = quantity;
      state.totalPrice = total;
    }
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;