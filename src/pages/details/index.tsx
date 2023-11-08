import React, {useEffect, useState} from "react";
import "./index.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/product";
import { BsFillBookmarkFill } from 'react-icons/bs';
import {Button, TextField} from "@mui/material";
import CommentCard from "@/components/comment";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {useLocation} from "react-router-dom";
import {comment, getProductById, getProductWithFilter} from "@/redux/features/productSlice.ts";
import {RootState} from "@/redux/store.ts";
import {orderProduct} from "@/redux/features/cartSlide.ts";
import BackDropLoading from "@/components/BackDropLoading.tsx";
import {LoadingStatus} from "@/enums/enum.ts";
import { AiFillHeart } from "react-icons/ai";
import {Form, Rate} from "antd";
import {formatCurrency} from "@/utils/convert.tsx";
import {toast} from "react-toastify";
function ProductDetailPage() {
    const location = useLocation();
    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)
    const [canComment, setCanComment] = useState(true)
    const  id = Number(location.pathname.substring(location.pathname.lastIndexOf('/') + 1))

    useEffect(() => {
        dispatch(getProductById(id)).unwrap().then((it) => {
            dispatch(getProductWithFilter({page: 0, limit: 4, filter: "", sort: "", label: it?.categories?.[0].label, search: ""}))
        })
        window.scrollTo(0, 0)
    }, [id])

    const product = useAppSelector((root: RootState) => root.product.product)
    const products = useAppSelector((root: RootState) => root.product.products)
    const comments = useAppSelector((root: RootState) => root.product.comments)

    const handleComment = (e) => {
        const data = {...e, food: product}

        dispatch(comment(data))
        setCanComment(true)
    }

    const handleChange = (isAsc: boolean) => {
        setQuantity(isAsc ?( quantity + 1) :( quantity - 1) > 0 ? (quantity - 1) : 1)
    }

    const handleOrder = () => {
        if (localStorage.getItem("token")) {
            setLoading(true)
            dispatch(orderProduct({...product, orderCount: quantity})).then(() => setLoading(false))
        } else {
            toast.error("Vui long dang nhap")
        }
    }

    return (
        <div className={"flex flex-col justify-center items-center bg-gray-50"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2>
                    chi tiết sản phẩm
                </h2>
            </div>
            <div className={"container-content bg-white mt-3 flex w-[75%] relative"}>
                <div className={"slider-wrap w-1/3"}>
                    <div className={"single-item p-3"}>
                        <Slider {...{
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            speed: 3000,
                            autoplaySpeed: 5000,
                            cssEase: "linear",
                            className: "slider center"
                        }}>

                            {
                                product ? product.imgs.map(it =>
                                    (<div>
                                        <img src={it}/>
                                    </div>)
                                ) : <></>
                            }
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
                            {
                                product ? product.imgs.map(it =>
                                    (<div className={"p-2 bg-white"}>
                                        <img src={it}/>
                                    </div>)
                                ) : <></>
                            }
                        </Slider>
                    </div>
                </div>
                <div className={"w-full pl-5 m-3"}>
                    <h1 className={"text-3xl text-gray-700"}>{product?.name}</h1>
                    <div className={"row-item flex w-full justify-between"}>
                        <div className={"info w-7/12"}>
                            <div className={"group-status pt-3"}>
                            <span className="first_status">SKU:&nbsp;<span className="status_name text-[#0b850b]">
                                {product?.slug}</span><span className="line">&nbsp;&nbsp;|&nbsp;&nbsp;</span></span>
                                <span className="first_status status_2">Tình trạng:
                                    {product?.quantity > 0 ?
                                        <span className="status_name availabel text-[#0b850b]">
                                            &nbsp;Còn hàng
                                        </span>
                                        : <span className="status_name availabel text-[#0b850b]">
                                            &nbsp;Hết hàng
                                        </span>}
                                    </span>
                            </div>
                            <div className="price-box bg-gray-100 p-4 mt-3">
                                <span className="special-price"><span className="font-bold text-3xl text-red-500">{formatCurrency(product?.price || 0)} &nbsp;</span></span>
                            </div>
                            <div className="product-summary mt-5 bg-gray-200">
                                <div className="rte text-gray-700 bg-white text-sm p-5">
                                    <p>{product?.shortDescription}</p>
                                </div>
                            </div>
                            <div className="p-2 mt-2">
                                <div className="w-100 ">
                                    <div className="form_product_content">
                                        <div className={"text-gray-700"}>
                                            <label>Số lượng:</label>
                                            <fieldset>
                                                <div className="flex mt-2 ">
                                                    <button className={"p-2 ps-5 pe-5 border rounded"} onClick={() => handleChange(false)} type="button">-</button>
                                                    <input type="number" className={"border text-center w-1/5"} readOnly={true}  value={quantity} />
                                                    <button className={"p-2 ps-5 pe-5 border rounded"} onClick={() => handleChange(true)} type="button">+</button>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="button_actions mt-5 flex flex-col items-start">
                                            <button onClick={handleOrder} type="submit" className="bg-[#ff5722] text-white text-sm uppercase pt-2 pb-2 ps-20 pe-20 rounded-md">
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
                <h1 className={"uppercase text-xl font-medium mb-8"}>Sản phẩm liên quan</h1>
                <div className={"p-3"}>
                    <Slider {...{
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        className: "slider w-full"
                    }}>
                        {
                            products ? products.map(it => <ProductCard product={it} key={it.id} />) : <></>
                        }
                    </Slider>
                </div>
            </div>

            <div className={"container-content bg-white mt-3 p-3 w-[75%]"}>
                <h1 className={"uppercase text-xl font-medium mb-5"}>Đánh giá</h1>
                <Form onFinish={handleComment}>
                    <Form.Item
                    name={"rate"}>
                        <Rate size="large"/>
                    </Form.Item>
                    <Form.Item
                    name={'comment'}>
                        <textarea id="note" name="note" rows="3" className={"border w-full p-3"}></textarea>
                    </Form.Item>
                    <div className={'flex flex-col items-end'}>
                        <Button type={'submit'} disabled={!product?.canComment && canComment} variant={'contained'} color={'success'}>Đánh giá</Button>
                    </div>
                </Form>

                <div className={"list-cmt"}>
                    {comments ? comments.map(it => <CommentCard data={it} />) : <></>}
                </div>
            </div>

            <BackDropLoading loading={loading}></BackDropLoading>
        </div>
    );
}
export default ProductDetailPage;
