import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GuestNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`

export const Nav = styled.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`

export const NavLogo = styled(Link)`
    font-size: 35px;
    font-weight: 600;
    text-decoration: none;
`

export const NavLogoCode = styled.div`
    color: var(--white);
`

export const NavLogoConnect = styled.div`
    color: var(--blue);
    padding-left: 25px;
`   

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-size: 26px;
    
    div {
        height: 50px;
    }

    & a.active {
        color: var(--white);
    }
`

export const NavIcon = styled(FontAwesomeIcon)`
    font-size: 22px;
`

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`

export const GuestLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 15px;
    color
`

export const PostButton = styled.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    width: 150px;
    height: 50px;
    color: var(--white);
    font-size: 16px;
    transition: 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
`