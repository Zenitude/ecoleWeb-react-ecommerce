/* eslint-disable no-case-declarations */
import { CardContainer, CardImage, CardDescription, CardTitle, CardPrice, CardButton } from "./Card.style"
import { CardProps } from "../../utils/types/types";

export default function Card({id, title, price, img, picked, cart, setCart, setProducts}: CardProps) {

    const addProductInCart = (title: string, img: string, price: number, id:number) => {
        const itemExist = cart.products.filter(item => item.title === title);        
        
        if(itemExist.length !== 0) {
            setCart(() => { 
                const filteredCart = cart.products.filter(item => item.id !== id);
                cart.products = filteredCart;
                cart.total = cart.products.reduce((acc, current) => acc + current.price_qty, 0);
                return cart;
            });
        } else if(itemExist.length === 0){
            setCart(() => { 
                const item = {
                    id: id,
                    title: title,
                    price_unit: price,
                    price_qty: price * 1,
                    img: img,
                    picked: picked,
                    quantity: 1
                };
                cart.products.push(item);
                cart.total = cart.products.reduce((acc, current) => acc + current.price_qty, 0);
                return cart;
            });
        }

        setProducts((prev) => {
            const previous = [...prev];  
            const item = previous[id-1];
            item.picked = !picked;
            previous[id-1] = item;
            return previous;
        })
    }

        

    return (
        <CardContainer>
            <CardImage src={`/images/${img}.png`} alt={`Photographie du ${title}`}/>
            <CardDescription>
                <CardTitle>{title}</CardTitle>
                <CardPrice>{price}$</CardPrice>
            </CardDescription>
            <CardButton className={picked ? "active" : "inactive"} onClick={() => addProductInCart(title, img, price, id)}>
                {
                    picked
                    ? ('Produit choisi ✔️')
                    : ('Ajouter au panier')
                }
            </CardButton>
        </CardContainer>
    )
}
