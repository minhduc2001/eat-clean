import React, {useState} from "react";
import "./index.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteCart, orderProduct} from "@/redux/features/cartSlide.ts";
import {useAppDispatch} from "@/redux/hooks.ts";
import {updateCartWithoutApi} from "@/redux/features/productSlice.ts";
import {Link} from "react-router-dom";
import {formatCurrency} from "@/utils/convert.tsx";

function Cart(props: any) {
    const [quantity, setQuantity] = useState(props?.cart?.quantity || 0)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const handleOrder = (isAsc: boolean) => {
        setLoading(true)
        const convert = props.cart.foods.categories.map(it => it.id)
        dispatch(orderProduct(
            {...props.cart.foods,
                orderCount: isAsc ?(1) :( quantity - 1) > 0 ? (- 1) : 1, categories: convert}))
            .then(() => {
                setLoading(false)
                dispatch(updateCartWithoutApi({...props.cart,
                    quantity: isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1}))
            })

        setQuantity(isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1)
    }

    const handleDelete = () => {
        dispatch(deleteCart(Number(props?.cart?.id))).then(() => {
            location.reload()
        })
    }
    return (
        <div className="w-full flex items-center mt-1.5 mb-2">
            <div className="h-full flex items-center p-0">
                <button className="p-2 text-center w-full" onClick={handleDelete}>
                    <DeleteOutlineIcon className="text-red-600" fontSize='small'/>
                </button>
            </div>
            <div>
                <Link to={`/product/${props?.cart?.foods?.id}`} className="product-images1  pos-relative embed-responsive embed-responsive-1by1">
                    <img className="w-full max-h-20" src={props?.cart?.foods?.imgs[0]} />
                </Link>
            </div>
            <div className="flex justify-between w-full border-y-green-900 pl-5">
                <div className="flex flex-col justify-between h-full">
                    <h3 className="product-name">
                        <a className="text-gray-700 font-light line-clamp-1 max-h-20">
                            {props?.cart?.foods?.name}
                        </a>
                    </h3>
                    <div className="">
                        <span className="product-price price text-red-600 font-bold">{formatCurrency(props?.cart?.foods?.price)}</span>
                    </div>
                </div>
                <div className="flex">
                    <button className="px-1 border rounded w-1/3 max-w-[50px]" type="button" onClick={() => handleOrder(false)}>-</button>
                    <input type="number" className="border w-1/3 text-center text-sm" value={quantity} />
                    <button className="px-1 border rounded p-1 w-1/3 max-w-[50px]" type="button" onClick={() => handleOrder(true)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
