import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    position: absolute;
    top: 0;
    padding: 10px 30px;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--White);
    z-index: 5;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export const MenuIconContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavbarLinksContainer = styled.ul`
    position: absolute;
    top: 90px;
    left: 50%;
    background-color: var(--White);
    transform: translateX(-50%);
    width: 90%;
    min-width: 200px;
    height: 200px;
    display: ${({isToggle}) => isToggle ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    z-index: 5;
    @media (min-width: 768px) {
        display: flex;
        position: unset;
        background: none;
        transform: translateX(0);
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }
`

export const NavbarLink = styled.a`
    position: relative;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--DarkBlue);
    cursor: pointer;
    &:hover::before{
        content: "";
        position: absolute;
        top: 40px;
        height: 4px;
        width: 100%;
        background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));
    }
    @media (min-width: 768px) {
        font-size: 1.3rem;
        color: var(--GrayishBlue);
    }
`

export const NavbarButton = styled.button`
    width: 140px;
    height: 40px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));
    color: var(--White);
    display: none;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
    @media (min-width: 768px) {
        display: block;
    }
`

export const Overlay = styled.div`
    display: ${({isToggle}) => isToggle ? 'flex' : 'none'};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: var(--DarkBlue);
    filter: opacity(0.5);
    @media (min-width: 768px) {
        display: none;
    }
`