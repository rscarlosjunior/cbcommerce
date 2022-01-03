import { Search } from '@mui/icons-material'
import React from 'react'
import { SHiddenLabel, Sform, Swrapper, Sinput, Sbutton } from './styles'

interface SearchBarProps {
  searchQuery?: string
  setSearchQuery?: any
}
export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleSearchQuery = (e: any) => {
    if (typeof setSearchQuery !== 'function') return
    setSearchQuery(e.target.value)
  }

  return (
    <Swrapper>
      <Sform>
        <label htmlFor="header-search">
          <SHiddenLabel>O que está procurando?</SHiddenLabel>
        </label>
        <Sinput
          onInput={handleSearchQuery}
          type="text"
          id="header-search"
          placeholder="O que está procurando?"
          name="s"
        />
        <Sbutton>
          <Search fontSize="large" />
        </Sbutton>
      </Sform>
    </Swrapper>
  )
}
