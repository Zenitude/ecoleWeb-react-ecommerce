export type CardProps = {
    title: string;
    price: number;
    img: string;
    picked: boolean;
    id: number;
    cart: CartType;
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
    setProducts: React.Dispatch<React.SetStateAction<ProductStateType[]>>;
}

export type CartProps = {
    cart : CartType,
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
    modalCart: boolean;
    setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
    setProducts: React.Dispatch<React.SetStateAction<ProductStateType[]>>;
}

export type ProductType = {
    title: string;
    price_unit: number;
    price_qty: number;
    img: string;
    picked: boolean;
    id: number;
    quantity: number;
}

export type ProductStateType = {
    title: string;
    price: number;
    img: string;
    picked: boolean;
    id: number;
}

export type CartType = {
    products : ProductType[]
    total: number;
}

export type ContextProps = {
    children: React.ReactNode;
}

export type ContextType = {
    cart: CartType;
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
}