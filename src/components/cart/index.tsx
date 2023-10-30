import React, {useState} from "react";
import "./index.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {orderProduct} from "@/redux/features/cartSlide.ts";
import {useAppDispatch} from "@/redux/hooks.ts";

function Cart(props: any) {
    const [quantity, setQuantity] = useState(props.cart.quantity)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const handleOrder = (isAsc: boolean) => {
        setQuantity(isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1)
        setLoading(true)
        dispatch(orderProduct({...props.cart.foods, orderCount: isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1})).then(() => setLoading(false))
    }
    return (
        <div className={"cart-container h-[120px] w-full flex items-center"}>
            <div className="flex h-full items-center">
                <div className={"h-full min-w-[50px] flex items-center justify-between"}>
                    <a className="text-center w-full" title="Xóa" href="javascript:;" data-id="49">
                        <DeleteOutlineIcon className={"text-red-600"} fontSize={'medium'}/>
                    </a>
                </div>
                <div className="w-[100px]">
                    <a href="https://wisefood.vn/san-pham/tra-gao-lut-dong-trung-wise-food-300g-20-goi-hop-giam-stress-hieu-qua" className="product-images1  pos-relative embed-responsive embed-responsive-1by1" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                        <img className="w-full" src="https://i.imgur.com/SurtL55.png" alt="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả" />
                    </a>
                </div>
                <div className="product-cart-infor flex justify-around w-full border-y-green-900 pl-5">
                    <div className="w-3/6">
                        <h3 className="product-name">
                            <a className="text-gray-700"
                               href="" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                            Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả</a>  </h3>
                        <span className="variant-title"></span>
                    </div>

                    <div className="cart-price ml-10">
                        <span className="product-price price text-red-600 font-bold">2.400.000₫</span>
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