import Dropdown from "./Dropdown"
import { ArrowIcon, Search, SearchBarContainer, SearchButton, SearchIcon } from "./styles/SearchBar.styled"
import { faArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

function SearchBar() {
    const [status, setStatus] =  useState('Recents')
    return (
        <SearchBarContainer>
            <Dropdown setStatus={setStatus} />
            <Search input="text" placeholder="Search"/>
            <SearchButton>
                <ArrowIcon icon={faArrowRight} />
            </SearchButton>
        </SearchBarContainer>
    )
}

export default SearchBar