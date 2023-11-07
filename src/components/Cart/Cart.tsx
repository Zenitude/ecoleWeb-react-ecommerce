import { useEffect, useRef } from "react";
import { CartContainer, ImgProduct, NameProduct, SelectQuantity, CartButton, TotalPrice } from "./Cart.style";
import { CartProps } from "../../utils/types/types";

export default function Cart({cart, setCart, modalCart, setModalCart, setProducts}: CartProps) {
  const cartRef = useRef<HTMLDialogElement>(null);

  const selectQty = (e: React.ChangeEvent<HTMLSelectElement>, indexItem:number) => {
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

  const deleteItem = (id: number) => {
    setCart((prev) => {
      const previous = {...prev};
      const products = previous.products;
      const filteredProducts = products.filter(item => item.id !== id);
      previous.products = filteredProducts;
      previous.total = previous.products.reduce((acc, current) => acc + current.price_qty, 0);
      return previous;
    })
    setProducts((prev) => {
      const previous = [...prev];
      const item = previous[id-1];
      item.picked = false;
      previous[id-1] = item;
      return previous;
    })
    
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
        <div className="articles">
          {
            cart.products.map((product, index) => (
              <article key={`${index}-${product.id}`}>
                <ImgProduct src={`/images/${product.img}.png`} alt={`Photographie de ${product.title}`}/>
                <NameProduct>{product.title}</NameProduct>
                <SelectQuantity onChange={(e) => selectQty(e, index)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </SelectQuantity>
                <CartButton className={"removeProduct"} onClick={() => deleteItem(product.id)}>Supprimer du panier</CartButton>
              </article>
            ))
          }
        </div>
      <p>Your total : <TotalPrice>{cart.total}$</TotalPrice></p>
      <CartButton className={"proceedCheckout"}>Procéder au paiement</CartButton>
    </CartContainer>
  )
}
