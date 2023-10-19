import React from "react";
import "./index.scss"
import ProductCard from "@/components/product";
import { Pagination } from 'antd';
function ProductsPage() {
    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-100"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    sản phẩm giảm cân
                </h2>
            </div>
            <div className={"w-3/4 p-5 bg-white mt-5 font-sans"}>
                <div className={"filter flex bg"}>
                    <label><span> Sắp xếp :</span></label>
                    <ul className={"ul_col ml-1 mb-0 w-4/5"}>
                        <li>
                            <ul className={"flex w-full justify-around pe-100"}>
                                <li>
                                    <a className={"filter-content"}>Tên A -> Z</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Tên Z -> A</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Giá tang giần</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Giá giảm gian</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Mới nhất</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Mua nhiều nhất</a>
                                </li>
                                <li>
                                    <a className={"filter-content"}>Yêu thích</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"grid grid-cols-4 gap-4 bg-white w-3/4 p-8"}>
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
                <ProductCard title={""} image={""} />
            </div>

            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
}
export default ProductsPage;
