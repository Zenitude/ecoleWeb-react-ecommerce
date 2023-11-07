import styled from "styled-components";

export const CartContainer = styled.dialog`
    width: 100%;
    max-width: 800px;
    min-width: 250px;
    padding: 50px 10px 20px;
    margin: auto;
    text-align: center;

    &::backdrop {
        background-color: rgba(0,0,0,0.8);
    }

    .articles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    article {
        max-width: 250px;
        min-width: 125px;
        height: auto;
        text-align: center;
        background-color: transparent;
    }

    p {
        width: fit-content;
        font-size: 1.5rem;
        margin: 50px auto 20px;
    }
`;


export const ImgProduct = styled.img`
    height: 125px;
`;

export const NameProduct = styled.h2`
    text-align: center;
`;

export const SelectQuantity = styled.select`
    padding: 10px;
    margin-right: 10px;
`;

export const CartButton = styled.button`
    background-color: #333;
    color: #f1f1f1;
    padding: 10px;

    &.closeCart {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.2rem;
    }

    &.proceedCheckout {
        margin: 0 auto;
    }

`;

export const TotalPrice = styled.span`
    font-weight: bold;
`;

