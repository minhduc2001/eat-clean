import {toastOption} from "@/configs/notification.config";
import {LoadingStatus} from "@/enums/enum";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {IBill, ICart, IProduct} from "@/interfaces/product.interface.ts";
import productApi from "@/api/productApi.ts";


export const orderProduct = createAsyncThunk(
    "cart/order",
    async (input: IProduct, thunkAPI) => {
        const response = await productApi.orderProduct(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const deleteCart = createAsyncThunk(
    "cart/delete",
    async (input: number, thunkAPI) => {
        const response = await productApi.deleteCart(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const paymentProduct = createAsyncThunk(
    "cart/payment",
    async (input: IBill, thunkAPI) => {
        const response = await productApi.paymentProduct(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const checkPromotion = createAsyncThunk(
    "cart/promotion",
    async (input: string, thunkAPI) => {
        const response = await productApi.checkPromotion(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);


export const countCart = createAsyncThunk(
    "cart/count",
    async (thunkAPI) => {
        const response = await productApi.countCart()
        console.log(response)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);


export interface CartState {
    totalOrder: number;
    error: ErrorResponse | null;
    loading: LoadingStatus | null;
    isFirst: boolean;
}

const initialState: CartState = {
    totalOrder: 0,
    error: null,
    loading: null,
    isFirst: true
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(orderProduct.fulfilled, (state, action) => {
        state.totalOrder += action.payload ? 1 : 0
      })
        .addCase(countCart.fulfilled, (state, action) => {
            state.totalOrder = action.payload ?? 0
        })
        .addCase(deleteCart.fulfilled, (state, action) => {
            state.totalOrder = state.totalOrder - 1
        })
        .addCase(paymentProduct.fulfilled, (state, action) => {
            state.totalOrder = 0
        })
      .addMatcher(
        (action) => action.type.includes("rejected"),
        (state, action) => {

          state.error = {
            message: action.payload?.message ?? action.error.message,
            errorCode: action.payload?.errorCode ?? action.error.code,
          };
          state.loading = LoadingStatus.Rejected;

          // toast.error(state.error.message, toastOption);
        }
      )
      .addMatcher(
        (action) => action.type.includes("fulfilled"),
        (state, action) => {
          state.error = null;
          state.loading = LoadingStatus.Fulfilled;
        }
      )
        .addMatcher(
            (action) => action.type.includes("pending"),
            (state, action) => {
                state.loading = LoadingStatus.Pending
            }
        )
      .addDefaultCase((state, action) => {
        // console.log(`action type: ${action.type}`, current(state));
      });
  },
});
export default cartSlice.reducer;

