import styled from "styled-components";

export const VideoDetailsWrapper = styled.div`

    #error {
        color: ${props => props.theme["red-500"]};
        text-align: center;
        margin-top: 1rem;
    }

`;

export const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 4rem;
    gap: 3rem;

    a {
        flex: 1;
    }

    img {
        flex: 1;
        width: 100%;
        height: auto;
        object-fit: contain; 
        border-radius: 8px;
        height: 23rem; 
        object-fit: cover;
        object-position: center;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.95rem;
        color: ${({ theme }) => theme["gray-300"]};
        line-height: 1.6;
        margin-top: 0.5rem;
        height: 5rem;
        max-width: 100%;
        overflow-y: scroll;
        padding: 0rem 0.5rem;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme["gray-800"]};
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme["red-700"]};
            border-radius: 4px;
            border: 2px solid ${({ theme }) => theme["gray-800"]};
        }
    }

    & > div {
        gap: 3rem;
        div {
            margin: -1rem 0rem;
            align-items: center;
        }
    }

`;

export const SummaryWrapper = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    padding: 2rem 4rem;
    margin: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    h2 {
        color: ${props => props.theme["silver-400"]};
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.4rem;
        overflow-y: auto;
        max-height: 10rem;
        padding-right: 1rem;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme["gray-800"]};
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme["red-700"]};
            border-radius: 4px;
            border: 2px solid ${({ theme }) => theme["gray-800"]};
        }
    }
`;

export const CommentsWrapper = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    padding: 2rem 4rem;
    margin: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    h2 {
        color: ${props => props.theme["silver-400"]};
        margin-bottom: 1rem;
    }

    ul {
        line-height: 1.3rem;
        overflow-y: auto;
        height: 20rem;
        padding-right: 1rem;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme["gray-800"]};
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme["red-700"]};
            border-radius: 4px;
            border: 2px solid ${({ theme }) => theme["gray-800"]};
        }

        li {
            background-color: ${props => props.theme["gray-700"]};
            margin-bottom: 1rem;
            padding: 1rem;
            border-radius: 10px;
        }
    }
`;
