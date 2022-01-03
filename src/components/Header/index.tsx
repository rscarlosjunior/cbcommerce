import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Hcontent,IconSpacing,IconWrapper, MyAccount } from './styles'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import { useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';

interface HeaderProps {
    handleProductFilter?: (v?:string) => void
}
export const Header:React.FC<HeaderProps> = ({
    handleProductFilter
}) => {
    const { search } = window.location; 
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const xs = useMediaQuery('(max-width:797px)');

    const handleFilter = (value:string) => {
        if (typeof handleProductFilter !== 'function') return
        setSearchQuery(value)
        handleProductFilter(searchQuery)
    }

    return (
        <>
            <Hcontent>
                {xs && (<Menu sx={{ fontSize: 40 }}/>)}
                <img src="https://i.imgur.com/R2kFhZw.png" alt=""/>
                {!xs && (
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={handleFilter}
                    />
                )}
                <IconWrapper>
                    {!xs && (
                        <IconSpacing>
                            <PermIdentitySharpIcon sx={{ fontSize: 40 }} />
                            <MyAccount>Minha Conta</MyAccount>
                        </IconSpacing>
                    )}
                    <IconSpacing>
                        <ShoppingCartSharpIcon  sx={{ fontSize: 35 }} />
                    </IconSpacing>
                </IconWrapper>
            </Hcontent>
            {xs && (
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={handleFilter}
                />
            )}
        </>
    )
}
