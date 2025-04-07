import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    all: unset; 
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.1);
    }
`;


export const MostLeastWrapper = styled.div`

    background-color: ${({ theme }) => theme["carbon-800"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-bottom: 1rem;
    overflow: hidden;
    max-width: 400px;

    img {
        width: 100%;
        object-fit: cover; 
        object-position: center;
    }

    h3 {
        font-size: 1rem;
        margin: 1rem 0rem;
    }

    svg {
        color: ${({ theme }) => theme["red-500"]};
        width: 3rem;
        height: 3rem;
    }

    p {
        font-weight: bold;
        font-size: 2rem;
    }


`;