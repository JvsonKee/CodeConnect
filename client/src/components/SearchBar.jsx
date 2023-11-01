import { Search, SearchBarContainer, SearchButton } from "./styles/SearchBar.styled"


function SearchBar() {
    return (
        <SearchBarContainer>
            <Search input="text" placeholder="Search"/>
            <SearchButton>Go</SearchButton>
        </SearchBarContainer>
    )
}

export default SearchBar