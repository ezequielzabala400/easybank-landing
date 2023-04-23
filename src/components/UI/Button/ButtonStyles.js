import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 140px;
    height: 40px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));
    color: var(--White);
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`