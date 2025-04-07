import styled from "styled-components";

export const HeaderWrapper = styled.header`

    background-color: ${props => props.theme["carbon-800"]};
    color: ${props => props.theme["gray-100"]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 2rem 1rem 2rem;

    img {
        width: 20rem;
    }

    ul {
        display: flex;
        gap: 1rem;
    }

    li {
        list-style-type: none;
        font-weight: bold;
    }

    a {
        color: ${props => props.theme["gray-100"]};
        text-decoration: none;
    }

    a.active {
        color: ${props => props.theme["red-500"]};;
    }

    @media (max-width: 900px) {
        li {
            font-size: 1.5rem;
        }
    }

`;
