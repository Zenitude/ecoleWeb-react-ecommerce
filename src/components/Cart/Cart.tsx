import { useEffect, useRef } from "react";
import { CartContainer, ImgProduct, NameProduct, SelectQuantity, CartButton, TotalPrice } from "./Cart.style";
import { CartProps } from "../../utils/types/types";

export default function Cart({cart, setCart, modalCart, setModalCart}: CartProps) {
  const cartRef = useRef<HTMLDialogElement>(null);

  const updateCart = (e: React.ChangeEvent<HTMLSelectElement>, id: number, indexItem:number) => {
    const element = e.currentTarget;
    const quantity = parseInt(element.value);
    
    setCart((prev) => {
      const previous = {...prev};
      const item = cart.products[indexItem];
      item.quantity = quantity;
      item.price_qty = item.price_unit * quantity;
      previous.products[indexItem] = item;
      previous.total = parseFloat((previous.products.reduce((acc, current) => acc + current.price_qty, 0)).toFixed(2));
      return previous;
    })
    console.log(cart);
  }

  const closeCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalCart(false);
  }

  useEffect(() => {
    if(cartRef.current !== null && modalCart) {
      cartRef.current.showModal();
    } else {
      cartRef.current?.close();
    }
  }, [modalCart])

  return (
    <CartContainer ref={cartRef}>
      <CartButton className="closeCart" onClick={(e) => closeCart(e)}>X</CartButton>
      {
        cart.products.map((product, index) => (
          <article key={`${index}-${product.id}`}>
            <ImgProduct src={product.img} alt={`Photographie de ${product.title}`}/>
            <NameProduct>{product.title}</NameProduct>
            <SelectQuantity onChange={(e) => updateCart(e, product.id, index)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </SelectQuantity>
            <CartButton className={"removeProduct"}>Supprimer du panier</CartButton>
          </article>
        ))
      }
      <p>Your total : <TotalPrice>{cart.total}$</TotalPrice></p>
      <CartButton className={"proceedCheckout"}>Procéder au paiement</CartButton>
    </CartContainer>
  )
}
