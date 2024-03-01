import React,{createContext, useContext, useState} from 'react'

//Create a new context for the shopping cart

const CartContext = createContext();

//Custom hook to consume the shopping Cart Context

export const useCart = () => useContext(CartContext);

//Provider component to wrap the application and provide cart state 

export const CartProvider =({children}) =>{

    const [cartElements, setCartElements] = useState([]);


// Function to add an item to the cart

const addCartItem = (item) =>{
    const isItemCart = cartElements.some(cartItem => cartItem.id === item.id);
    if(isItemCart){
        alert('Item is already in the cart')
        return;
    }
    setCartElements([...cartElements, item])
}
//Function to remove an item from the cart
const removeCartItem = (id) =>{
    const updateCart = cartElements.filter(item => item.id !== id);
    setCartElements(updateCart)
}
//Function to clear cart
const clearCart = () =>{
    setCartElements([])
}
//Function to increase quantity of items in cart
    const increaseItemQuantity = (id) =>{
        const updatedCart = cartElements.map(item => {
            if(item.id === id){
                return {...item, quantity:item.quantity + 1};
            }
            return item;
        })
        setCartElements(updatedCart);
    }

// Function to decrease quantity of item in cart
const decreaseItemQuantity = (id) =>{
    const updatedCart = cartElements.map(item => {
        if(item.id === id && item.quantity > 1 ){
            return {...item, quantity:item.quantity - 1};
        }
        return item;
    })
    setCartElements(updatedCart);
}
//calculate totalAmount 
const totalAmount = cartElements.reduce((total, item) =>{
    return total + (item.price * item.quantity);
}, 0)

//Create the value object to provide to consuming components
const value = {
    cartElements,
    addCartItem, 
    removeCartItem,
    clearCart,
    totalAmount,
    increaseItemQuantity,
    decreaseItemQuantity
};
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}