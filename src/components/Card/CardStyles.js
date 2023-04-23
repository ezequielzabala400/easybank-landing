import styled from "styled-components";

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 320px;
    @media (min-width: 768px) {
        align-items: self-start;
        gap: 40px;
    }
`

export const CardImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    @media (min-width: 768px) {
        padding-left: 10px;
    }
`

export const CardTitle = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    @media (min-width: 768px) {
        font-size: 2.2rem;
    }
`

export const CardParagraph = styled.p`
    text-align: center;
    font-size: 1.3rem;
    color: var(--GrayishBlue);
    @media (min-width: 768px) {
        text-align: start;
        font-size: 1.5rem;
        width: 240px;
        line-height: 24px;
    }
`