import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    padding: 2rem 0;
`;

export const MetricCard = styled.div`
    background-color: ${({ theme }) => theme["carbon-800"]};
    color: ${({ theme }) => theme["gray-100"]};
    padding: 2rem;
    border-radius: 12px;
    flex: 1 1 250px;
    max-width: 320px;

    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    svg {
        color: ${({ theme }) => theme["red-500"]};
        width: 32px;
        height: 32px;
    }

    h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme["gray-300"]};
    }

    strong {
        font-size: 1.2rem;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`;
