import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS= ()=> {
    let cartProducts= localStorage.getItem('cartProductLS');
    if(!cartProducts){
        return [];
    }else{
        cartProducts= JSON.parse(cartProducts);
        // update cart button value
        updateCartValue(cartProducts);
        return cartProducts;
    }
};