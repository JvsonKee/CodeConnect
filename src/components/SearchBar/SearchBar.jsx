// import Dropdown from "../Dropdown/Dropdown"
import { ArrowIcon, Search, SearchBarContainer, SearchButton } from "./SearchBar.styled"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import propTypes from "prop-types"

function SearchBar( {data} ) {
    // const [status, setStatus] =  useState('Recents')
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {

        const filtered = data.filter((item) => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) 
    
        navigate(`/CodeConnect/explore-results/${searchTerm}`, {state: { results: filtered, searchTerm: searchTerm}})
    }

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <SearchBarContainer>
            <Search input="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeydown}/>
            {/* <SearchButton onClick={handleSearch}>
                <ArrowIcon icon={faArrowRight} />
            </SearchButton> */}
        </SearchBarContainer>
    )
}

SearchBar.propTypes = {
    data : propTypes.object
}

export default SearchBar