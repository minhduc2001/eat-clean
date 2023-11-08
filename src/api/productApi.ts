import {IBill, IBlog, IComment, ILoginData, IRegisterData, IToken, IUser} from "@/interfaces";
import Api from "./api";
import {ICart, ICategory, IProduct} from "@/interfaces/product.interface.ts";

class ProductApi {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "/products";
    }

    async get(
        _param: Query,
    ): Promise<ApiListResponse<IProduct>> {
        return Api.GET(this.baseUrl + "/get", _param);
    }

    async getBlogs(
        _param: Query,
    ): Promise<ApiListResponse<IBlog>> {
        return Api.GET(this.baseUrl + `/get-blog?page=${_param.page}&limit=${_param.limit}`);
    }


    async getOne(
        _param: number,
    ): Promise<ApiResponse<IProduct>> {
        return Api.GET(this.baseUrl + `/${_param}`);
    }

    async getBlogOne(
        _param: number,
    ): Promise<ApiResponse<IBlog>> {
        return Api.GET(this.baseUrl + `/get-blog/${_param}`);
    }



    async filter(
        _param: Query,
    ): Promise<ApiListResponse<IProduct>> {
        return Api.GET(this.baseUrl + `/filter?page=${_param.page}&limit=${_param.limit}&filter=${_param.filter}&sort=${_param.sort}&search=${_param.search}&label=${_param.label}` );
    }


    async getCategory(): Promise<ApiResponse<ICategory[]>> {
        return Api.GET(this.baseUrl + `/category` );
    }

    async orderProduct(body: IProduct): Promise<ApiResponse<boolean>> {
        return Api.POST(this.baseUrl + `/add-cart`, body);
    }

    async deleteCart(body: number): Promise<ApiResponse<boolean>> {
        return Api.DELETE(this.baseUrl + `/delete-cart?id=${body}`);
    }

    async paymentProduct(body: IBill): Promise<ApiResponse<string>> {
        return Api.POST(this.baseUrl + `/order`, body);
    }

    async getCart(): Promise<ApiResponse<ICart[]>> {
        return Api.GET(this.baseUrl + `/get-cart` );
    }


    async countCart(): Promise<ApiResponse<number>> {
        return Api.GET(this.baseUrl + `/count-cart` );
    }

    async checkPromotion(code: string): Promise<ApiResponse<number>> {
        return Api.GET(this.baseUrl + `/promotion?code=${code}` );
    }

    async comment(body: IComment): Promise<ApiResponse<boolean>> {
        return Api.POST(this.baseUrl + `/comment`, body);
    }
}

export default new ProductApi();
