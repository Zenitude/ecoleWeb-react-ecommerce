import { useEffect, useRef } from "react";
import { CartContainer, ImgProduct, NameProduct, SelectQuantity, CartButton, TotalPrice } from "./Cart.style";
import { CartProps } from "../../utils/types/types";

export default function Cart({cart, modalCart, setModalCart}: CartProps) {

  const cartRef = useRef<HTMLDialogElement>(null);

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
            <SelectQuantity>
              <option value="1">1</option>
            </SelectQuantity>
            <CartButton className={"removeProduct"}>Supprimer du panier</CartButton>
          </article>
        ))
      }
      <p>Your total : <TotalPrice>{cart.total}</TotalPrice></p>
      <CartButton className={"proceedCheckout"}>Procéder au paiement</CartButton>
    </CartContainer>
  )
}
