import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Hcontent, IconSpacing, IconWrapper, MyAccount, Total } from './styles'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp'
import { useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useCart } from '@/hooks/useCart'
interface HeaderProps {
  handleProductFilter?: (v?: string) => void
}
export const Header: React.FC<HeaderProps> = ({ handleProductFilter }) => {
  const { cartItems } = useCart()
  const xs = useMediaQuery('(max-width:797px)')

  const handleFilter = (value: string) => {
    if (typeof handleProductFilter !== 'function') return
    handleProductFilter(value)
  }

  return (
    <>
      <Hcontent>
        {xs && <Menu sx={{ fontSize: 40 }} />}
        <img src="https://i.imgur.com/R2kFhZw.png" alt="" />
        {!xs && <SearchBar setSearchQuery={handleFilter} />}
        <IconWrapper>
          {!xs && (
            <IconSpacing>
              <PermIdentitySharpIcon sx={{ fontSize: 40 }} />
              <MyAccount>Minha Conta</MyAccount>
            </IconSpacing>
          )}
          <IconSpacing>
              <ShoppingCartSharpIcon sx={{ fontSize: 35 }} />
              <Total> {cartItems ? cartItems : 0 } </Total>
          </IconSpacing>
        </IconWrapper>
      </Hcontent>
      {xs && <SearchBar setSearchQuery={handleFilter} />}
    </>
  )
}
