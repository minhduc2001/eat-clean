import {IUser} from "@/interfaces/auth.interface.ts";

export interface IProduct {
    id?: string;
    name?: string;
    slug?: string;
    price?: number;
    quantity?: number;
    imgs?: string[];
    shortDescription?: string;
    description?: string;
    categories?: ICategory[];
    orderCount?: number;
    comments: IComment[];
    canComment: boolean;
}

export interface IBlog {
    id: number;
    title: string;
    thumbnail: string;
    content: string;
}

export interface ICategory {
    id: number;
    label: string;
    key: string;
}

export interface ICart {
    id: number;
    quantity: number;
    foods: IProduct;
}

export interface IComment {
    id: number;
    comment: string;
    rate: number;
    user: IUser;
    createAt: Date;
    food: IProduct;
}


export interface IBill {
    id: number;
    carts: ICart[];
    username: string;
    phone: string;
    address: string;
    note: string;
    price: number;
    billStatus: string
}