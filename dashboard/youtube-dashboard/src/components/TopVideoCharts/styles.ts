import { styled } from "styled-components";

export const ChartContainer = styled.div`
    width: 100%;
    height: 320px;
    padding: 2rem 1rem;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }

`;

export const CustomTooltip = styled.div`
    background-color: ${({ theme }) => theme["carbon-700"]};
    padding: 0.625rem;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 250px;
`;