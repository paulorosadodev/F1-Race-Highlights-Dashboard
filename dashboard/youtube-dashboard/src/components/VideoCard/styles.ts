import styled from "styled-components";

export const VideoWrapper = styled.div`

    background-color: ${props => props.theme["carbon-700"]};
    border-radius: 8px;

    width: 20rem;
    position: relative;

    transition: scale .3s;

    &:hover {
        scale: 1.01;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme["gray-100"]};
    }

    img {
        width: 100%;
        height: auto; 
        object-fit: cover; 
        border-radius: 8px 8px 0 0; 
    }

    .video-data {
        padding: 0.5rem 1rem 0rem 1rem;

        h2 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .video-number-data {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            
            span {
                display: flex;
                align-items: center;
                gap: 0.3rem;
            }
        }

        .date {
            margin-top: 2rem;
            justify-self: flex-end;
            position: absolute;
            top: -2rem;
            right: 0;
            background-color: ${props => props.theme["gray-800"]};
            border-radius: 0px 0px 0px 8px;
            padding: 0.2rem 0.5rem 0.2rem 0.5rem;
            font-weight: bold;
        }

    }


`;