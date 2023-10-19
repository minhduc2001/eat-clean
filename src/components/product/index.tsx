import React from "react";
function ProductCard(props: ProductProps) {
    return (
        <div style={{padding: "10px"}}>
            <div className={"wrap-item pb-8"}>
                <h3>
                    <a href={"http://localhost:5173/product/1"}>
                        chế độ ăn giảm cân keto 28 ngày
                    </a>
                </h3>
                <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-eat-clean-28-ngay.jpg"}/>
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
                    <a href={"/product/1"}>
                        Đặt hàng
                    </a>
                </div>
            </div>
        </div>
    );
}
import "./index.scss"

interface ProductProps {
    title: string;
    image: string;

}

export default ProductCard;
