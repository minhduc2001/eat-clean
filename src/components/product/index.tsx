import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";
function ProductCard(props: any) {
    const data = props.product
    return (
        <div style={{padding: "10px"}}>
            <div className={"wrap-item pb-8"}>
                <h3>
                    <Link to={`/product/${data?.id}`}>
                        chế độ ăn giảm cân keto 28 ngày
                    </Link>
                </h3>
                <Link to={`/product/${data?.id}`}>
                    <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-eat-clean-28-ngay.jpg"}/>
                </Link>
                <p className={"desc"}>Không ai có thể giúp bạn ngoài chính mình, cơ thể này là của bạn muốn trở nên xinh đẹp hay xấu xí phụ thuộc vào bạn.
                    - Gói ăn tuần giảm cân Keto 28 ngày mỗi ngày 2 bữa ăn
                    - Không chứa tinh bột
                    - Ship gói ăn tận nhà từ thứ 2 đến chủ nhật
                    - Calories dao động từ 1000 - 1200 mỗi ngày
                    - Ít đường, ra
                </p>
                <p className={"price-label"}>
                    Giá: <span>2,800,000 đ</span>
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
