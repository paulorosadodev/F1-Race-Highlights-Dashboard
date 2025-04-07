import styled from "styled-components";

export const VideosWrapper = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["carbon-900"]};
    color: ${props => props.theme["gray-100"]};

    h1 {
        color: ${props => props.theme["red-500"]};
    }

`;

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin-top: 1.5rem;
`;

export const SortInput = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SearchInput = styled.input`
    background-color: ${props => props.theme["carbon-700"]};
    color: ${props => props.theme["white"]};
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    max-width: 400px;
    border: none;
    outline: none;
    box-shadow: none;
`;

export const SortSelect = styled.select`
    background-color: ${props => props.theme["carbon-700"]};
    color: ${props => props.theme["white"]};
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;

    option {
        background-color: ${props => props.theme["carbon-700"]};
        color: ${props => props.theme["white"]};
    }
`;

export const DirectionButton = styled.button`
    background-color: ${props => props.theme["carbon-700"]};
    color: ${props => props.theme["white"]};
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    max-width: 1600px;
    padding: 2rem;

    & > * {
        flex: 1 1 22%; 
        max-width: 22%;
    }

    @media (max-width: 1200px) {
        & > * {
        flex: 1 1 30%;
        max-width: 30%;
        }
    }

    @media (max-width: 900px) {
        & > * {
        flex: 1 1 45%;
        max-width: 45%;
        }
    }

    @media (max-width: 600px) {
        padding: 1rem;

        & > * {
        flex: 1 1 100%;
        max-width: 100%;
        }
    }
`;
