import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Hcontent, IconSpacing, IconWrapper, MyAccount, Total } from './styles'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp'
import { useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useLocalStorageLite from '@/hooks/LocalStorage'
interface HeaderProps {
  handleProductFilter?: (v?: string) => void
}
export const Header: React.FC<HeaderProps> = ({ handleProductFilter }) => {
  const xs = useMediaQuery('(max-width:797px)')
  const cart = useLocalStorageLite('cart') //todo: change add to cart to redux.

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
              {cart && (
                <Total> {cart.state ? cart.state : 0} </Total>
              )}
          </IconSpacing>
        </IconWrapper>
      </Hcontent>
      {xs && <SearchBar setSearchQuery={handleFilter} />}
    </>
  )
}
