import { useContext } from 'react'
import { CartItemContext } from '@/context/addToCart'

export const useCart = () => useContext(CartItemContext)