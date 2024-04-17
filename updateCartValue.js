const cartVAlue= document.querySelector("#cartValue");

export const updateCartValue= (cartProducts)=> {
    return (cartVAlue.innerHTML= `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length}</i>`);
};