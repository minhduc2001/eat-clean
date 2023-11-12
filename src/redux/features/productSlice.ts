import authApi from "@/api/authApi";
import { toastOption } from "@/configs/notification.config";
import { LoadingStatus } from "@/enums/enum";
import {IBill, IBlog, IComment, ILoginData, IRegisterData, IUser} from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {ICart, ICategory, IProduct} from "@/interfaces/product.interface.ts";
import productApi from "@/api/productApi.ts";
import loading = toast.loading;
import billApi from "@/api/billApi.ts";

export const getProductByPage = createAsyncThunk(
    "products/get",
    async (input: Query, thunkAPI) => {
        const response = await productApi.get(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const getBlogByPage = createAsyncThunk(
    "products/blog",
    async (input: Query, thunkAPI) => {
        const response = await productApi.getBlogs(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);

export const getBills = createAsyncThunk(
    "products/bills",
    async (input: Query, thunkAPI) => {
        const response = await billApi.getBills(input)
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

export const getBlogById = createAsyncThunk(
    "get-blog",
    async (input: number, thunkAPI) => {
        const response = await productApi.getBlogOne(input)
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

export const updateCartWithoutApi = createAsyncThunk(
    "products/update-cart",
    async (input: IProduct, thunkAPI) => {
        return input
    }
);

export const comment = createAsyncThunk(
    "cart/comment",
    async (input: IComment, thunkAPI) => {
        const response = await productApi.comment(input)
        if (!response.success)
            throw { message: response.message, errorCode: response.errorCode };
        return response.data;
    }
);



export interface ProductState {
    products: IProduct[] | null;
    product: IProduct | null;
    comments: IComment[] | null;
    categories: ICategory[] | null;
    blogs: IBlog[] | null;
    blog: IBlog | null;
    bills: IBill[] | null;
    cart: ICart[] | null;
    error: ErrorResponse | null;
    loading: LoadingStatus;
    metadata: IMetadata | null;
}

const initialState: ProductState = {
    products: null,
    product: null,
    categories: null,
    blogs: null,
    blog: null,
    cart: null,
    bills: null,
    error: null,
    loading: LoadingStatus.Pending,
    metadata: {totalPages: 1}
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
            .addCase(getBlogByPage.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.blogs = action.payload.results;
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
                state.comments = action.payload.comments;
            })
            .addCase(getBlogById.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.blog = action.payload;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.cart = action.payload;
            })
            .addCase(comment.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.comments =[...state.comments, action.payload]
            })
            .addCase(getBills.fulfilled, (state, action) => {
                if (action.payload == null) return;
                state.bills = action.payload.results
                state.metadata = action.payload.metadata
            })
            .addCase(updateCartWithoutApi.fulfilled, (state, action) => {
                if (action.payload == null) return;
                // state.cart.findIndex()
                console.log(action.payload, "======")
                state.cart = state.cart?.map(it => {
                    if (it.id == action.payload.id) {
                        it.quantity = action.payload.quantity;
                    }

                    return it;
                })
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
                    // state.products = []
                    state.metadata = null

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
                    state.loading = LoadingStatus.Pending;
                }
            )
            .addDefaultCase((state, action) => {
                // console.log(`action type: ${action.type}`, current(state));
            });
    },
});
export default productSlice.reducer;
