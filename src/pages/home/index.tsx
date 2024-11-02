import Helmet from "@/components/Helmet.tsx";
import React, {useEffect, useState} from "react";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {Carousel, Image} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss"
import ProductCard from "@/components/product";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.ts";
import {getBlogByPage, getProductByPage} from "@/redux/features/productSlice.ts";
import {RootState} from "@/redux/store.ts";
import {useSearchParams} from "react-router-dom";
import {countCart} from "@/redux/features/cartSlide.ts";
import {toast} from "react-toastify";


function HomePage() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const [countItem, setCountItem] = useState(4)

  useEffect(() => {
    dispatch(getProductByPage({page: 0, limit: 10}))
    if (localStorage.getItem("token")) {
      dispatch(countCart())
    }
    const rsCode = searchParams.get("resultCode")
    if (rsCode != null) {
      if (rsCode != "0") {
        toast.error("Thanh toán thất bại")
      } else {
        toast.success("Thanh toán thành công")
      }
    }
    const handleResize = () => {
      if (window.innerWidth < 468) {
        setCountItem(1)
      } else if (window.innerWidth < 1024) {
        setCountItem(2)
      } else if (window.innerWidth < 1440) {
        setCountItem(3)
      } else {
        setCountItem(4)
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  const products = useAppSelector((root: RootState) => root.product.products)
  return (
    <>
      <Helmet title="Home" description="home page" />
      <AsyncWrapper loading={false} fulfilled={Boolean([])}>
        <Carousel
            autoplay
            autoplaySpeed={2000}
            effect="scrollx"
            dotPosition="bottom"
            draggable={true}
            className='cursor-grab'>
          <div>
            <Image
                src="https://healthyeating.shop/wp-content/uploads/2023/06/granola-sieu-hat-it-yen-mach-1.jpg"
                preview={false}
            />
          </div>
          <div>
            <Image
                src="https://healthyeating.shop/wp-content/uploads/2023/06/giam-can-eat-clean-19.jpg"
                preview={false}
            />
          </div>
          <div>
            <Image
                src="https://healthyeating.shop/wp-content/uploads/2021/01/che-do-an-giam-can-3-2048x865.jpg"
                preview={false}
            />
          </div>
          <Image
              src="https://healthyeating.shop/wp-content/uploads/2023/02/giam-can-eat-clean-15.jpg"
              preview={false}
          />
        </Carousel>
        <div className="wrap-baseline">
          <h2>
            Ưu đãi
          </h2>
          <div className={"wrap-items"}>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-2-1.png"} />
                </a>
                <p className="uppercase font-light">Chọn món ăn</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-01-2-1.png"} />
                </a>
                <p className="uppercase font-light">Chọn lịch ăn</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-03-1.png"} />
                </a>
                <p className="uppercase font-light">Đặt hàng</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-01-2.png"} />
                </a>
                <p className="uppercase font-light">Giao hàng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menu">
          <h2>
            Combo trong tuần
          </h2>
          <div className={"menu-wrapper"}>
            <Slider {...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: Math.min(2, countItem),
              slidesToScroll: 1,
              className: "slider center",
              enterMode: true,
            }}>
              <div className={"menu-item"}>
                <img src={"/img_1.jpeg"}/>
              </div>
              <div className={"menu-item"}>
                <img src={"/img_2.jpeg"}/>
              </div>
            </Slider>
          </div>
        </div>

        <div className={"products"} >
          <h2>
            Sản phẩm mới
          </h2>
          {
            products ?
                <Slider {...{
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: Math.min(products.length, 4),
                  slidesToScroll: 1,
                  className: "slider center",
                  enterMode: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: Math.min(products.length, 3),
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: Math.min(products.length, 2),
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 468,
                      settings: {
                        slidesToShow: Math.min(products.length, 1),
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    }]
                }}>
                  {
                    products.map(it =>
                        <ProductCard product={it} key={it.id} />
                    )
                  }
                </Slider> : <></>
          }
        </div>

        <div className={"wrap-baseline"}>
          <h2>
            Tiêu chí chất lượng
          </h2>
          <div className={"wrap-items"}>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-05.png"} />
                </a>
                <p className="uppercase font-light">Chọn món ăn</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-2-1.jpg"} />
                </a>
                <p className="uppercase font-light">Chọn lịch ăn</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-10.png"} />
                </a>
                <p className="uppercase font-light">Đặt hàng</p>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-08.png"} />
                </a>
                <p className="uppercase font-light">Giao hàng</p>
              </div>
            </div>
          </div>
        </div>
      </AsyncWrapper>
    </>
  );
}

export default HomePage;
