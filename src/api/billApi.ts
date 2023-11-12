import {IBill, ICategory, ILoginData, IRegisterData, IToken, IUser, Wrapper} from "@/interfaces";
import Api from "./api";

class BillApi {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "/bill";
    }

    async getBills(input: Query): Promise<ApiListResponse<IBill>> {
        return Api.GET(this.baseUrl + `/get?page=${input.page}&limit=${input.limit}` );
    }
}

export default new BillApi();
