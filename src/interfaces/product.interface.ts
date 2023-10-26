import {IUser} from "@/interfaces/auth.interface.ts";

export interface IProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    quantity: number;
    imgs: string[];
    shortDescription: string;
    description: string;
    categories: ICategory[];
}

export interface ICategory {
    id: number;
    label: string;
}

export interface IComment {
    id: number;
    comment: string;
    rate: number;
    user: IUser;
    createAt: Date;
}
