import { Search } from '@mui/icons-material'
import React from 'react'
import { SHiddenLabel, Sform, Swrapper, Sinput, Sbutton } from './styles'

interface SearchBarProps {
    searchQuery?: string,
    setSearchQuery?: unknown,
}
export const SearchBar = ({
    searchQuery,
    setSearchQuery,
}: SearchBarProps) => {
    
    const handleSearchQuery = (e:any) => {
        if (typeof setSearchQuery !== 'function') return
        setSearchQuery(e.target.value)
    }

    return (
        <Swrapper>
            <Sform action="/" method="get">
                <label htmlFor="header-search">
                    <SHiddenLabel>O que está procurando?</SHiddenLabel>
                </label>
                <Sinput
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    type="text"
                    id="header-search"
                    placeholder="O que está procurando?"
                    name="s" 
                />
                <Sbutton type="submit"><Search fontSize="large"/></Sbutton>
            </Sform>
        </Swrapper>
    )
}

