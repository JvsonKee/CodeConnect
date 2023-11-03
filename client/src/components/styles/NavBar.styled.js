import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--off-white);
    background-color: var(--brown);
    box-shadow: 1px 0 15px 2px var(--shadow);
`

export const Nav = styled.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15%;
    width: 70%;
`

export const NavLogo = styled.div`
    font-size: 35px;
    font-weight: 600;
`
export const NavLogoCode = styled.div`

`

export const NavLogoConnect = styled.div`
    color: var(--green);
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
`

export const PostButton = styled.div`
    background-color: var(--green);
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    height: 50px;
`