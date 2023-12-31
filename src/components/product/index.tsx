import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";
import {formatCurrency} from "@/utils/convert.tsx";
function ProductCard(props: any) {
    const data = props.product
    console.log(data)
    return (
        <div style={{padding: "10px"}}>
            <div className={"wrap-item pb-8"}>
                <h3>
                    <Link to={`/product/${data?.id}`}>
                        {data.name}
                    </Link>
                </h3>
                <Link to={`/product/${data?.id}`}>
                    <div className={'overflow-hidden h-[200px]'}>
                        <img src={data.imgs[0]} className={'object-center object-contain'}/>
                    </div>
                </Link>
                <p className={"desc"}>
                    {data.shortDescription}
                </p>
                <p className={"price-label"}>
                    Giá: <span>{formatCurrency(data.price)}</span>
                </p>
                <div className={"btn-order mb-5"}>
                    <Link to={`/product/${data?.id}`}>
                        Đặt hàng
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default ProductCard;
