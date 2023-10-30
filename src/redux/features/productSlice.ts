import authApi from "@/api/authApi";
import { toastOption } from "@/configs/notification.config";
import { LoadingStatus } from "@/enums/enum";
import { ILoginData, IRegisterData, IUser } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {ICart, ICategory, IProduct} from "@/interfaces/product.interface.ts";
import productApi from "@/api/productApi.ts";
import loading = toast.loading;

export const getProductByPage = createAsyncThunk(
    "products/get",
    async (input: Query, thunkAPI) => {
        const response = await productApi.get(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const getProductById = createAsyncThunk(
    "get",
    async (input: number, thunkAPI) => {
        const response = await productApi.getOne(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const getProductWithFilter = createAsyncThunk(
    "products/filter",
    async (input: Query, thunkAPI) => {
        const response = await productApi.filter(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const getCategory = createAsyncThunk(
    "products/category",
    async (thunkAPI) => {
        const response = await productApi.getCategory()
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);


export const getCart = createAsyncThunk(
    "cart/get",
    async (thunkAPI) => {
        const response = await productApi.getCart()
        console.log(response)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);



export interface ProductState {
    products: IProduct[] | null;
    product: IProduct | null;
    categories: ICategory[] | null;
    cart: ICart[] | null;
    error: ErrorResponse | null;
    loading: LoadingStatus;
    metadata: IMetadata | null;
}

const initialState: ProductState = {
    products: null,
    product: null,
    categories: null,
    cart: null,
    error: null,
    loading: LoadingStatus.Pending,
    metadata: {totalPages: 1},
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductByPage.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.products = action.payload.results;
                state.metadata = action.payload.metadata
            })
            .addCase(getProductWithFilter.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.products = action.payload.results;
                state.metadata = action.payload.metadata
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.categories = action.payload;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.product = action.payload;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.cart = action.payload;
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
                    state.products = []
                    state.metadata = null

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
            .addMatcher(
                (action) => action.type.includes("pending"),
                (state, action) => {
                    state.loading = LoadingStatus.Pending;
                }
            )
            .addDefaultCase((state, action) => {
                // console.log(`action type: ${action.type}`, current(state));
            });
    },
});
export default productSlice.reducer;
