import {ILoginData, IRegisterData, IToken, IUser, Wrapper} from "@/interfaces";
import Api from "./api";

class AuthApi {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "/users";
  }

  async login(
    loginInfomation: ILoginData
  ): Promise<ApiResponse<any>> {
    return Api.POST<ApiResponse<string>>(
      this.baseUrl + "/login",
      // @ts-ignore
      new URLSearchParams(loginInfomation)
    );
  }

  async register(singupInfomation: IRegisterData): Promise<ApiResponse<any>> {
    return Api.POST<ApiResponse<any>>(
      this.baseUrl + "/register",
      singupInfomation
    );
  }

  async refreshToken(): Promise<ApiResponse<IToken>> {
    return Api.POST<ApiResponse<IToken>>(this.baseUrl + "/refresh", {});
  }

  async logout() {
    return Api.POST(this.baseUrl + "/logout", {});
  }
}

export default new AuthApi();
