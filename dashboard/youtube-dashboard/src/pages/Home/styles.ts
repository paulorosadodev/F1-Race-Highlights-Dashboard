import styled from "styled-components";

export const HomeWrapper = styled.div`

    background-color: ${props => props.theme["carbon-900"]};
    color: ${props => props.theme["gray-100"]};

    h1 {
        color: ${props => props.theme["red-500"]};
        text-align: center;
        margin-top: 1rem;
    }

    padding: 0 2rem;

    .chart {
        background-color: ${props => props.theme["carbon-800"]};
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        overflow: hidden;
        padding-bottom: 3rem;
    }

    .views-over-time {
        padding: 1rem 1rem;
        padding-top: 2rem;
    }

`;

export const CountChartsWrapper = styled.div`

    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin-bottom: 2rem;

`;

export const MostLeastVideosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .up {
        color: ${props => props.theme["highlight"]};
    }

    .down {
        color: ${props => props.theme["silver-400"]};
    }

    h2 {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .most-least-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        overflow: hidden;
        width: 100%;
        padding: 2rem;

        a {
            color: ${props => props.theme["white"]};
            text-decoration: none;
        }

        .most-container, .least-container {

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            width: 25rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

            div {
                width: 100%;
            }
        }
    }

`;