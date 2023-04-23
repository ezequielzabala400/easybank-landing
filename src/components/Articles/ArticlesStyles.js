import styled from "styled-components";

export const ArticlesWrapper = styled.section`
    width: 100%;
    background-color: var(--VeryLightGray);
    padding-bottom: 40px;
`

export const ArticlesContainer = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;
        align-items: self-start;
        padding: 36px;
    }

    h2{
        font-size: 3rem;
        font-weight: 400;
        color: var(--DarkBlue);
        @media (min-width: 768px) {
        
    }
    }
`

export const ArticlesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`