import styled from "styled-components";

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--White);
    border-radius: 10px;
    max-width: 290px;
    padding-bottom: 10px;
    gap: 20px;
    @media (min-width: 768px) {
        max-width: 250px;

    }

    img{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        height: 40%;
        width: 100%;
        @media (min-width: 768px) {
        height: 200px;
    }
    }

`

export const ArticleInfo = styled.div`
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: start;
    gap: 10px;
`

export const ArticleAuthor = styled.small`
    font-size: 1.2rem;
`

export const ArticleTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--DarkBlue);
    cursor: pointer;
    &:hover{
        color: var(--LimeGreen);
    }
    @media (min-width: 768px) {
        font-size: 1.7rem;
        width: 90%;
    }
`

export const ArticleText = styled.p`
    font-size: 1.2rem;
    line-height: 16px;
    color: var(--GrayishBlue);
    @media (min-width: 768px) {
        font-size: 1.4rem;
        width: 90%;
    }
`