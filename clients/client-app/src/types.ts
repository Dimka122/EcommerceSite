export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartItemDto {
    productId: number;
    name: string;
    price: number;
    quantity: number;
}