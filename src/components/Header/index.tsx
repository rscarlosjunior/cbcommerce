import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Hcontent } from './styles'

interface HeaderProps {
    handleProductFilter?: (v?:string) => void
}
export const Header:React.FC<HeaderProps> = ({
    handleProductFilter
}) => {
    const { search } = window.location; 
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const handleFilter = (value:string) => {
        setSearchQuery(value)
        if (typeof handleProductFilter !== 'function') return
        handleProductFilter(searchQuery)
    }

    return (
        <Hcontent>
            <img src="https://i.imgur.com/R2kFhZw.png" alt=""/>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={handleFilter}
            />
        </Hcontent>
    )
}
