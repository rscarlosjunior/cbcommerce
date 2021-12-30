import React from 'react'
import { SHiddenLabel } from './styles'

export const SearchBar = ({
    searchQuery,
    setSearchQuery
}) => {
    
    const handleSearchQuery = (e) => {
        if (typeof setSearchQuery !== 'function') return
        setSearchQuery(e.target.value)
    }

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <SHiddenLabel>O que está procurando?</SHiddenLabel>
            </label>
            <input
                value={searchQuery}
                onChange={handleSearchQuery}
                type="text"
                id="header-search"
                placeholder="O que está procurando?"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
    )
}

