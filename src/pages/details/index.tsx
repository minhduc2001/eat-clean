import React from "react";
import "./index.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/product";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
function ProductDetailPage() {
    return (
        <div className={"flex flex-col justify-center items-center bg-gray-50"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    chi tiết sản phẩm
                </h2>
            </div>
            <div className={"container-content bg-white mt-3 flex w-[75%]"}>
                <div className={"slider-wrap w-1/3"}>
                    <div className={"single-item p-3"}>
                        <Slider {...{
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            className: "slider w-full"
                        }}>
                            <div>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                            <div>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                        </Slider>
                    </div>
                    <div className={"multiple-items"}>
                        <Slider {...{
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            className: "slider w-full"
                        }}>
                            <div className={"p-2 bg-white"}>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                            <div className={"p-2 bg-white"}>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                            <div className={"p-2 bg-white"}>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                            <div className={"p-2 bg-white"}>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                            <div className={"p-2 bg-white"}>
                                <img src={"https://i.imgur.com/ZGsriEb.jpg"}/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={"w-full pl-5 m-3"}>
                    <h1 className={"text-3xl text-gray-700"}>Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả</h1>
                    <div className={"row-item flex w-full justify-between"}>
                        <div className={"info w-7/12"}>
                            <div className={"group-status pt-3"}>
                            <span className="first_status">SKU:&nbsp;<span className="status_name text-[#0b850b]">
                                tra-dong-trung</span><span className="line">&nbsp;&nbsp;|&nbsp;&nbsp;</span></span>
                                <span className="first_status status_2">Tình trạng:
                                    <span className="status_name availabel text-[#0b850b]">Còn hàng</span></span>
                            </div>
                            <div className="price-box bg-gray-100 p-4 mt-3">
                                <span className="special-price"><span className="font-bold text-3xl text-red-500">160,000₫ &nbsp;</span></span>
                                <span className="old-price">
                                <del className="text-gray-700">220,000₫</del></span>
                            </div>
                            <div className="product-summary mt-5 bg-gray-200">
                                <div className="rte text-gray-700 bg-white text-sm p-5">
                                    <p>- giảm stress hiệu quả</p><p>- thanh nhiệt</p><p>- giúp ngủ ngon</p>
                                </div>
                            </div>
                            <div className="p-2 mt-2">
                                <div className="w-100 ">
                                    <div className="form_product_content">
                                        <div className={"text-gray-700"}>
                                            <label>Số lượng:</label>
                                            <fieldset>
                                                <div className="flex mt-2">
                                                    <button className={"p-2 ps-5 pe-5 border rounded"} type="button">-</button>
                                                    <input type="number" className={"border text-center w-1/5"} value="1" />
                                                    <button className={"p-2 ps-5 pe-5 border rounded"} type="button">+</button>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="button_actions mt-5 flex flex-col items-start">
                                            <button type="submit" className="bg-[#ff5722] text-white text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                                <span className="text_1">Thêm vào giỏ hàng</span>
                                            </button>
                                            <button type="submit"className="text-[#0b850b] border-[#0b850b] border min-w-[303px] mt-2
                                            text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
                                                <span className="text_1">Mua ngay</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"only-eat-clean p-4 border w-1/3 rounded border-gray-200 text-gray-700 h-fit"}>
                            <div className="product-policises-wrapper">
                                <h5 className="m-0 mb-3 font-medium text-xl">
                                    Chỉ có ở Wisefood:
                                </h5>
                                <ul>
                                    <li className="flex items-center mt-3">
                                        <div>
                                            <img className="max-w-[30px]" loading="lazy" src="//bizweb.dktcdn.net/100/417/051/themes/899407/assets/policy_product_image_1.png?1656318270429" alt="100% tự nhiên" />
                                        </div>
                                        <div className="media-body">
                                            &nbsp;&nbsp;100% tự nhiên
                                        </div>
                                    </li>
                                    <li className="flex items-center mt-3">
                                        <div>
                                            <img className="max-w-[30px]" loading="lazy" src="//bizweb.dktcdn.net/100/417/051/themes/899407/assets/policy_product_image_2.png?1656318270429" alt="Chứng nhận ATTP" />
                                        </div>
                                        <div className="media-body">
                                            &nbsp;&nbsp;Chứng nhận ATTP
                                        </div>
                                    </li>
                                    <li className={"flex items-center mt-3"}>
                                        <div>
                                            <img className={"max-w-[30px]"}  loading="lazy" src="//bizweb.dktcdn.net/100/417/051/themes/899407/assets/policy_product_image_3.png?1656318270429" alt="Luôn luôn tươi mới" />
                                        </div>
                                        <div>
                                            &nbsp;&nbsp;Luôn luôn tươi mới
                                        </div>
                                    </li>
                                    <li className={"flex items-center mt-3"}>
                                        <div>
                                            <img className={"max-w-[30px]"} loading="lazy" src="//bizweb.dktcdn.net/100/417/051/themes/899407/assets/policy_product_image_4.png?1656318270429" alt="An toàn cho sức khoẻ"/>
                                        </div>
                                        <div >
                                            &nbsp;&nbsp;An toàn cho sức khoẻ
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div >
                                <a href="#" title="Phương thức thanh toán">
                                    <img loading="lazy" src="//bizweb.dktcdn.net/100/417/051/themes/899407/assets/product_banner_img.jpg?1656318270429" alt="Phương thức thanh toán" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container-content bg-white mt-3 p-3 w-[75%]"}>
                <h1 className={"uppercase text-xl font-medium mb-5"}>Mô tả sản phẩm</h1>
                <p><span className={"text-sm text-gray-700"}>Trà Gạo Lứt Đông Trùng Wise Food 300g Giảm Stress Hiệu Quả</span></p>
                <p><span className={"text-sm text-gray-700"}>Thông tin sản phẩm</span></p>
                <p><span className={"text-sm text-gray-700"}>- Thành phần: đông trùng hạ thảo, gạo lứt, đậu đỏ, đậu đen, kỷ tử, hoa nhài, cỏ ngọt</span></p>
                <p><span className={"text-sm text-gray-700"}>- Nguyên liệu Organic, không chất bảo quản và phụ gia</span></p>
                <p><span className={"text-sm text-gray-700"}>- Khối lượng tịnh: 300g</span></p>
                <p><span className={"text-sm text-gray-700"}>- Quy cách đóng gói: 20 gói/ hộp, 1 gói 15g</span></p>
                <br/>
                <p><span className={"text-sm text-gray-700"}>Trà Gạo Lứt Đông Trùng Wise Food 300g Giảm Stress Hiệu Quả</span></p>
                <p><span className={"text-sm text-gray-700"}>Thông tin sản phẩm</span></p>
                <p><span className={"text-sm text-gray-700"}>- Thành phần: đông trùng hạ thảo, gạo lứt, đậu đỏ, đậu đen, kỷ tử, hoa nhài, cỏ ngọt</span></p>
                <p><span className={"text-sm text-gray-700"}>- Nguyên liệu Organic, không chất bảo quản và phụ gia</span></p>
                <p><span className={"text-sm text-gray-700"}>- Khối lượng tịnh: 300g</span></p>
                <p><span className={"text-sm text-gray-700"}>- Quy cách đóng gói: 20 gói/ hộp, 1 gói 15g</span></p>
                <br/>
                <p><span className={"text-sm text-gray-700"}>Trà Gạo Lứt Đông Trùng Wise Food 300g Giảm Stress Hiệu Quả</span></p>
                <p><span className={"text-sm text-gray-700"}>Thông tin sản phẩm</span></p>
                <p><span className={"text-sm text-gray-700"}>- Thành phần: đông trùng hạ thảo, gạo lứt, đậu đỏ, đậu đen, kỷ tử, hoa nhài, cỏ ngọt</span></p>
                <p><span className={"text-sm text-gray-700"}>- Nguyên liệu Organic, không chất bảo quản và phụ gia</span></p>
                <p><span className={"text-sm text-gray-700"}>- Khối lượng tịnh: 300g</span></p>
                <p><span className={"text-sm text-gray-700"}>- Quy cách đóng gói: 20 gói/ hộp, 1 gói 15g</span></p>
                <br/>
                <p><span className={"text-sm text-gray-700"}>Trà Gạo Lứt Đông Trùng Wise Food 300g Giảm Stress Hiệu Quả</span></p>
                <p><span className={"text-sm text-gray-700"}>Thông tin sản phẩm</span></p>
                <p><span className={"text-sm text-gray-700"}>- Thành phần: đông trùng hạ thảo, gạo lứt, đậu đỏ, đậu đen, kỷ tử, hoa nhài, cỏ ngọt</span></p>
                <p><span className={"text-sm text-gray-700"}>- Nguyên liệu Organic, không chất bảo quản và phụ gia</span></p>
                <p><span className={"text-sm text-gray-700"}>- Khối lượng tịnh: 300g</span></p>
                <p><span className={"text-sm text-gray-700"}>- Quy cách đóng gói: 20 gói/ hộp, 1 gói 15g</span></p>
            </div>
            <div className={"container-content bg-white mt-3 p-3 w-[75%]"}>
                <h1 className={"uppercase text-xl font-medium mb-8"}>Mô tả sản phẩm</h1>
                <div className={"p-3"}>
                    <Slider {...{
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        className: "slider w-full"
                    }}>
                        <ProductCard title={""} image={""} />
                        <ProductCard title={""} image={""} />
                        <ProductCard title={""} image={""} />
                        <ProductCard title={""} image={""} />
                        <ProductCard title={""} image={""} />
                    </Slider>
                </div>
            </div>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{display: "flex", background: "gray", borderRadius: 50, padding:0, justifyContent: "center", alignItems: 'center' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
export default ProductDetailPage;
