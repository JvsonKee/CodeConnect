import { useEffect, useState } from "react"
import {
    DropdownContainer,
    Select, 
    Selected, 
    Caret,
    Menu
} from "./Dropdown.styled"
import propTypes from 'prop-types'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown( {setStatus} ) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('Sort')

    useEffect(() => {
        setStatus(selected)
    })

    return (
        <DropdownContainer onClick={() => {setOpen(!open)}}>
            <Select>
                <Selected>{selected}</Selected>
                <Caret icon={faCaretDown} className={`${open? 'active' : 'inactive'}`}/>
            </Select>
            <Menu className={`${open? 'active' : 'inactive'}`}>
                <div onClick={() => {setSelected('Top')}}>Top</div>
                <div onClick={() => {setSelected('Recent')}}>Recent</div>
            </Menu>
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    setStatus : propTypes.func
}

export default Dropdown