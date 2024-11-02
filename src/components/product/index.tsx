import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";
import {formatCurrency} from "@/utils/convert.tsx";
function ProductCard(props: any) {
    const data = props.product
    return (
        <div style={{padding: "10px"}}>
            <div className={"wrap-item pb-8"}>
                <h3>
                    <a href={`/product/${data?.id}`}>
                        {data.name}
                    </a>
                </h3>
                <a href={`/product/${data?.id}`}>
                    <div className={'overflow-hidden h-[200px]'}>
                        <img src={data.imgs[0]} className={'object-center object-contain'}/>
                    </div>
                </a>
                <p className={"line-clamp-2 h-10 text-sm"}>
                    {data.shortDescription}
                </p>
                <p className={"price-label"}>
                    Giá: <span>{formatCurrency(data.price)}</span>
                </p>
                <div className={"btn-order mb-5"}>
                    <a href={`/product/${data?.id}`}>
                        Đặt hàng
                    </a>
                </div>
            </div>
        </div>
    );
}



export default ProductCard;
