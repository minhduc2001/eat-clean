import React from "react";
import "./index.scss"
import Cart from "@/components/cart";
import {Divider} from "@mui/material";

interface CartPageProps {
    time: string;
    title: string;
    image: string;
}

function CartPage(props: CartPageProps) {
    return (
        <div className={"flex justify-center flex-col items-center"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    Giỏ hàng
                </h2>
            </div>
            <div className={"flex w-9/12 flex-row container-content"}>
                <div className={"list-carts"}>
                    <Cart time={""} title={""} image={""} />
                    <div className={"w-full pl-3 pr-3"}><Divider /></div>
                    <Cart time={""} title={""} image={""} />
                </div>
                <div className={"w-5/12"}>
                    <div className="w-full p-5">
                        <div className="title-cart flex w-11/12 justify-between">
                            <h3 className="text-xs-left">Giảm giá</h3>
                            <span className="text-xs-right discount_amount">0₫</span>
                        </div>

                        <div className="title-cart mt-4 flex w-11/12 justify-between">
                            <h3 className="text-xs-left">Tổng tiền</h3>
                            <span className="font-bold text-gray-700">2.400.000₫</span>
                        </div>
                        <div className="checkout mt-5 p-2">
                            <a href={"/order"} type="submit" className="bg-[#ff5722] w-full text-white text-center cursor-pointer text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                <span className="text_1">Thanh toán</span>
                            </a>
                        </div>
                        <div className={"p-2 pt-1"}>
                            <button type="submit" className="bg-white w-full text-white text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                <span className="text-gray-700">Tiếp tục mua sắm</span>
                            </button>
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