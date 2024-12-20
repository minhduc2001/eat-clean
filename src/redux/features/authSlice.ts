import authApi from "@/api/authApi";
import { toastOption } from "@/configs/notification.config";
import { LoadingStatus } from "@/enums/enum";
import { ILoginData, IUser } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const requestLogin = createAsyncThunk(
  "auth/login",
  async (input: ILoginData, thunkAPI) => {
    const response = await authApi.login(input);
      console.log(response)
    if (!response.success)
      throw { message: response.message, errorCode: response.errorCode };
    return response.data;
  }
);

export const requestRegister = createAsyncThunk(
  "auth/register",
  async (input: any, thunkAPI) => {
    const response = await authApi.register(input);
    if (!response.success)
      throw { message: response.message, errorCode: response.errorCode };
    return response.data;
  }
);

export interface AuthState {
  currentUser: IUser | null | undefined;
  accessToken: string | undefined;
  error: ErrorResponse | null;
  loading: LoadingStatus;
}

const initialState: AuthState = {
  currentUser: null,
  accessToken: "",
  error: null,
  loading: LoadingStatus.Pending
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestLogin.fulfilled, (state, action) => {
        if (action.payload == null) return;
        // state.currentUser = rest;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("token", state.accessToken)
      })
      .addMatcher(
        (action) => action.type.includes("rejected"),
        (state, action) => {
          console.log(action);

          state.error = {
            message: action.payload?.message ?? action.error.message,
            errorCode: action.payload?.errorCode ?? action.error.code,
          };
          state.loading = LoadingStatus.Rejected;

          toast.error(state.error.message, toastOption);
        }
      )
      .addMatcher(
        (action) => action.type.includes("fulfilled"),
        (state, action) => {
          state.error = null;
          state.loading = LoadingStatus.Fulfilled;
        }
      )
      .addDefaultCase((state, action) => {
        // console.log(`action type: ${action.type}`, current(state));
      });
  },
});
export default authSlice.reducer;
