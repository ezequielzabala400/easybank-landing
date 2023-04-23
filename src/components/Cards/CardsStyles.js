import styled from "styled-components";

export const CardsWrapper = styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    @media (min-width: 768px) {
        padding: 36px;
        max-width: 1200px;
        margin: auto;
    }
`
export const CardsSectionBg = styled.div`
    width: 100%;
    background-color: var(--LightGrayishBlue);
`

export const CardsTitles = styled.div`
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (min-width: 768px) {
        justify-content: start;
        align-items: self-start;
        max-width: unset;
    }

    h2{
        font-size: 3rem;
        text-align: center;
        font-weight: 400;
        color: var(--DarkBlue);
    }

    p{
        text-align: center;
        font-size: 1.3rem;
        line-height: 20px;
        color: var(--GrayishBlue);
        @media (min-width: 768px) {
            text-align: start;
            font-size: 1.6rem;
            max-width: 600px;
            line-height: 26px;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`