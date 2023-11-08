import React, {useState} from "react";
import "./index.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteCart, orderProduct} from "@/redux/features/cartSlide.ts";
import {useAppDispatch} from "@/redux/hooks.ts";
import {updateCartWithoutApi} from "@/redux/features/productSlice.ts";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {formatCurrency} from "@/utils/convert.tsx";

function Cart(props: any) {
    console.log(props)
    const [quantity, setQuantity] = useState(props?.cart?.quantity || 0)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const handleOrder = (isAsc: boolean) => {
        setLoading(true)
        dispatch(orderProduct(
            {...props.cart.foods,
                orderCount: isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1}))
            .then(() => {
                setLoading(false)
                dispatch(updateCartWithoutApi({...props.cart,
                    quantity: isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1}))
            })

        setQuantity(isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1)
    }

    const handleDelete = () => {
        console.log(props?.cart?.id)
        dispatch(deleteCart(Number(props?.cart?.id))).then(() => {
            location.reload()
        })
    }
    return (
        <div className={"cart-container h-[120px] w-full flex items-center"}>
            <div className="flex h-full items-center">
                <div className={"h-full min-w-[50px] flex items-center justify-between"}>
                    <Button className="text-center w-full" onClick={handleDelete}>
                        <DeleteOutlineIcon className={"text-red-600"} fontSize={'medium'}/>
                    </Button>
                </div>
                <div className="w-[100px]">
                    <Link to={`/product/${props?.cart?.foods?.id}`} className="product-images1  pos-relative embed-responsive embed-responsive-1by1" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                        <img className="w-full" src={props?.cart?.foods?.imgs[0]} alt="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả" />
                    </Link>
                </div>
                <div className="product-cart-infor flex justify-around w-full border-y-green-900 pl-5">
                    <div className="w-3/6">
                        <h3 className="product-name">
                            <a className="text-gray-700"
                               href="" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                                {props?.cart?.foods?.name}</a>  </h3>
                        <span className="variant-title"></span>
                    </div>

                    <div className="cart-price ml-10">
                        <span className="product-price price text-red-600 font-bold">{formatCurrency(props?.cart?.foods?.price)}</span>
                    </div>
                    <div className="ml-5">
                        <div className="txt_center">
                            <input className="variantID" type="hidden" name="variantId" value="49" />
                            <div className="flex ml-5">
                                <button className={"pl-3 pr-3 border rounded"} type="button" onClick={() => handleOrder(false)}>-</button>
                                <input type="number" className={"border text-right w-1/5 p-1 text-sm"} value={quantity} />
                                <button className={"ps-3 pe-3 border rounded p-1"} type="button" onClick={() => handleOrder(true)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;