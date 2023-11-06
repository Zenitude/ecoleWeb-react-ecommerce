import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
    }
`;

export const HomeContainer = styled.main` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
    
    h1 {
        width: 100%;
        max-width: 1265px;
        min-width: 260px;
        margin-inline: auto;
        color: #fff;
        align-self: flex-start;
    }

    div {
        width: 100%;
        max-width: 1265px;
        min-width: 260px;
        background-color: #333;
        border-radius: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        article {
            width: 33%;
            max-width: 400px;
            min-width: 240px;
            height: 375px;
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            img {
                width: 100%;
                height: 75%;
            }

            div {
                width: 100%;
                min-width: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: transparent;

                h2 {
                    font-weight: normal;
                }

                span {
                    font-weight: bold;
                }
            }

            button {
                padding: 10px 0;
                color: #fff;
                font-size: 1.2em;
                height: 50px;

                &.active {
                    background-color: #0f0;
                }

                &.inactive {
                    background-color: #333;
                }
            }
        }

        
    }
`;
