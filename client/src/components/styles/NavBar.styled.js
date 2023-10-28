import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 100vh;
    color: white;
    background-color: #121212;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10%;
    width: 70%;
    height: 90%;
    
`

export const NavLogo = styled.div`
    font-size: 35px;
    font-weight: 600;
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
    background-color: #5041FF;
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    height: 50px;
`