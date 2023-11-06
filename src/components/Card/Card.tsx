import { CardContainer, CardImage, CardDescription, CardTitle, CardPrice, CardButton } from "./Card.style"
import { CardProps } from "../../utils/types/types";

export default function Card({id, title, price, img, picked, cart, setCart, setProducts}: CardProps) {
    
    const updateCart = (title: string, img: string, price: number) => {    
        const exist = cart.products.filter(item => item.id === id);
        
        if(exist.length > 0) {
            setCart((prev) => {
                const previous = {...prev};
                const filteredCart = previous.products.filter(item => item.id !== id);
                previous.products = filteredCart;
                previous.total = previous.products.reduce((acc, current) => acc + current.price_qty, 0);
                return previous;
            });
        } else {
            const item = {
                id: id,
                title: title,
                price_unit: price,
                price_qty: price * 1,
                img: img,
                picked: picked,
                quantity: 1
            }

            setCart((prev) => {
                const previous = {...prev};
                previous.products.push(item);
                previous.total = previous.products.reduce((acc, current) => acc + current.price_qty, 0);
                return previous;
            });
        }

        setProducts((prev) => {
            const previous = [...prev ];  
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
            <CardButton className={picked ? "active" : "inactive"} onClick={() => updateCart(title, img, price)}>
                {
                    picked
                    ? ('Produit choisi ✔️')
                    : ('Ajouter au panier')
                }
            </CardButton>
        </CardContainer>
    )
}
