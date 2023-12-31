import React, {useEffect} from "react";
import "./index.scss"
import Cart from "@/components/cart";
import {Divider} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {RootState} from "@/redux/store.ts";
import {getCart} from "@/redux/features/productSlice.ts";
import {formatCurrency} from "@/utils/convert.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Empty} from "antd";

function CartPage() {

    const dispatch = useAppDispatch();
    const cart = useAppSelector((root: RootState) => root.product.cart)

    const totalCost = cart ? cart.reduce((total, item) => {
        const itemCost = (item.foods?.price ? item.foods?.price : 0) * item.quantity;
        console.log(itemCost)
        return total + itemCost;
    }, 0) : 0;

    const navigate = useNavigate()

    console.log(totalCost)

    useEffect(() => {
        dispatch(getCart())
    },[])

    return (
        <div className={"flex justify-center flex-col items-center"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Giỏ hàng
                </h2>
            </div>
            <div className={"flex w-9/12 flex-row container-content"}>
                <div className={"list-carts"}>
                    {
                        cart && cart.length > 0 ? cart.map(it => {
                            return (
                                <>
                                    <Cart cart={it} key={it.id} />
                                    <div className={"w-full pl-3 pr-3"}><Divider /></div>
                                </>
                            )
                        }) : <></>
                    }
                </div>
                {!cart == null || cart?.length == 0  ? <div className={'w-full'}>
                    <Empty className={''} />
                </div> : <></>}
                <div className={"w-5/12"}>
                    <div className="w-full p-5">
                        <div className="title-cart flex w-11/12 justify-between">
                            <h3 className="text-xs-left">Giảm giá</h3>
                            <span className="text-xs-right discount_amount">0₫</span>
                        </div>

                        <div className="title-cart mt-4 flex w-11/12 justify-between">
                            <h3 className="text-xs-left">Tổng tiền</h3>
                            <span className="font-bold text-gray-700">{formatCurrency(totalCost)}</span>
                        </div>
                        <div className="checkout mt-5 p-2">
                            <button onClick={() => {
                                navigate("/order", {state: {data: cart}})
                            }} type="submit" className="bg-[#ff5722] w-full text-white text-center cursor-pointer text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                <span className="text_1">Thanh toán</span>
                            </button>
                        </div>
                        <div className={"p-2 pt-1"}>
                            <Link to={"/"} type="submit" className="bg-white text-center w-full text-white text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                <span className="text-gray-700">Tiếp tục mua sắm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="cart-note w-11/12 bg-white mr-5 ml-5">
                        <label htmlFor="note" className="note-label">Ghi chú đơn hàng</label>
                        <textarea id="note" name="note" rows="3" className={"border w-full p-3"}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;