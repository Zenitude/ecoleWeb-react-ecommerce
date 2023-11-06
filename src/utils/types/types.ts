export type CardProps = {
    title: string;
    price: number;
    img: string;
    picked: boolean;
    id: number;
    cart: CartType;
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
}

export type CartProps = {
    cart : {
        products: ProductType[];
        total: number;
    },
    modalCart: boolean;
    setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
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