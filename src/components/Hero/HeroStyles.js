import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    background-color: var(--VeryLightGray);
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const HeroImageContainer = styled.div`
    position: absolute;
    top: 70px;
    height: 40%;
    width: 100%;
    background-image: url(${({image}) => image});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        display: none;
    }
    img{
        height: 500px;
        width: 100%;
        max-width: 350px;
        padding-bottom: 70px;
    }
`

export const HeroInfoContainer = styled.div`
    margin-top: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    max-width: 300px;
    gap: 20px;
    @media (min-width: 576px) {
        max-width: 400px;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export const HeroTitle = styled.h1`
    font-size: 3.3rem;
    text-align: center;
    color: var(--DarkBlue);
    font-weight: 400;
    @media (min-width: 576px) {
        font-size: 4rem;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export const HeroParagraph = styled.p`
    font-size: 1.2rem;
    text-align: center;
    line-height: 20px;
    color: var(--GrayishBlue);
    @media (min-width: 576px) {
        font-size: 1.7rem;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export const HeroImageDesktop = styled.div`
    background-image: url(${({image}) => image});
    width: 50%;
    order: 2;
    overflow: hidden;
    background-size: cover;
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`

export const HeroInfoDesktop = styled.div`
    display: none;
    width: 60%;
    padding: 0 30px;
    order: 1;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media (min-width: 768px) {
        display: flex;
    }
`

export const HeroTitleDesktop = styled.h1`
    font-size: 5rem;
    text-align: start;
    color: var(--DarkBlue);
    font-weight: 400;
    order: 2;
    max-width: 400px;
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`

export const HeroParagraphDesktop = styled.p`
    font-size: 1.5rem;
    text-align: start;
    line-height: 22px;
    order: 1;
    color: var(--GrayishBlue);
    max-width: 400px;
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`

export const BtnDesktopContainer = styled.div`
    width: 100%;
    max-width: 400px;
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }

    button{
        align-self: start;
    }
`