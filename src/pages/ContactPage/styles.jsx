import styled from 'styled-components';

export const ContactPage = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconsArea = styled.div`
    display: flex;
    gap: 90px;

    button, a{
        color: black;
        transition: transform .15s ease-in;
        font-size: 6rem;

        &:hover {
            transform: scale(1.1);
        }
    }

    .instagram-icon:hover svg {
        transition:color .7s ease-in;
        &:hover{
            color:#E1306C
        }
    }

    .twitter-icon:hover svg {
        transition:color .7s ease-in;
        &:hover{
            color:#2196f3
        }
    }

    .reddit-icon:hover svg {
        transition:color .7s ease-in;
        &:hover{
            color:#FF4500
        }
    }

    .facebook-icon:hover svg {
        transition:color .7s ease-in;
        &:hover{
            color:#1877F2
        }
    }

    .github-icon:hover svg {
        transition:color .7s ease-in;
        &:hover{
            color:#0D1117
        }
    }
`;