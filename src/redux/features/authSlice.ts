import authApi from "@/api/authApi";
import { LoadingStatus } from "@/enums/enum";
import { ILoginData, IUser } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const requestLogin = createAsyncThunk(
  "auth/login",
  async (input: ILoginData, thunkAPI) => {
    const response = await authApi.login(input);

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
  loading: LoadingStatus.Pedding,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestLogin.fulfilled, (state, action) => {
        if (action.payload == null) return;
        const { accessToken, ...rest } = action.payload;
        state.currentUser = rest;
        state.accessToken = accessToken;
      })
      .addMatcher(
        (action) => action.type.includes("rejected"),
        (state, action) => {
          state.error = {
            message: action.error.message ?? action.payload.message,
            errorCode: action.error.code,
          };
          state.loading = LoadingStatus.Rejected;
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
