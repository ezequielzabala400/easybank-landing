import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding: 40px 0;
    width: 100%;
    background-color: var(--DarkBlue);
`

export const FooterContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: var(--White);
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin: auto;
        max-width: 1200px;
    }
`

export const FooterIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
`

export const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
            color: var(--LimeGreen);
    }
`

export const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (min-width: 768px) {
        flex-wrap: wrap;
        height: 100px;
        align-items: self-start;
        justify-content: space-evenly;
    }
    a{
        margin: 40px;
        color: var(--White);
        font-size: 1.6rem;
        &:hover{
            color: var(--LimeGreen);
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (min-width: 768px) {
        align-items: flex-end;
        gap: 20px;
    }
    small{
        font-size: 1.3rem;
        color: var(--GrayishBlue);
    }
    
`
