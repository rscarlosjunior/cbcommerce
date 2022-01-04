import React, { useState, createContext } from 'react'

export const CartItemContext = createContext({
  cartItems: {},
  updateValue: () => {}
})

export const CartItemProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState(0)

  const updateValue = () => {
    setCartItems(cartItems + 1)
  }

  return (
    <CartItemContext.Provider
        value={{
            cartItems,
            updateValue
        }}
    >
      {children}
    </CartItemContext.Provider>
  )
}