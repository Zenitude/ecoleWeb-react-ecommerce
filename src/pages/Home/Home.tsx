import { useState, useEffect, useContext } from "react";
import { HomeContainer, GlobalStyle } from "./Home.style";
import { StyleSheetManager } from "styled-components";
import Card from "../../components/Card/Card";
import { ProductStateType } from "../../utils/types/types";
import Cart from "../../components/Cart/Cart";
import { Context } from "../../utils/context/context";

export default function Home () {
    const [ products, setProducts ] = useState<ProductStateType[]>([]);
    const [ modalCart, setModalCart ] = useState(false);
    const { cart, setCart } = useContext(Context)!;    

    useEffect(() => {
        fetch('/data/inventory.json')
        .then(response => response.json())
        .then(datas => {
            const { products } = datas;
            setProducts(products);
        })
    }, [])

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <button onClick={() => setModalCart(!modalCart)}>Cart</button>
                <h1>Here are our products</h1>
                <div className="products">
                    {
                        products?.map((product, index) => (
                            <Card key={`${index}-${product.id}`} id={product.id} title={product.title} price={product.price} img={product.img} picked={product.picked} cart={cart} setCart={setCart} />
                        ))
                    }
                </div>
                <Cart cart={cart} setCart={setCart} modalCart={modalCart} setModalCart={setModalCart}/>

            </HomeContainer>
        </StyleSheetManager>
    )
}