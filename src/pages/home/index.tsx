import Helmet from "@/components/Helmet.tsx";
import React from "react";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {Carousel, Image} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss"
import ProductCard from "@/components/product";
import BlogCard from "@/components/blog";


function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slider center"
  };

  return (
    <>
      <Helmet title="Home" description="home page" />
      <AsyncWrapper loading={false} fulfilled={Boolean([])}>
        <Carousel autoplay autoplaySpeed={3000} effect="fade">
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

        <div className={"wrap-baseline"}>
          <h2>
            Hướng dẫn đặt hàng
          </h2>
          <div className={"wrap-items"}>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-2-1.png"} />
                </a>
                <h3>Chọn món ăn</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-01-2-1.png"} />
                </a>
                <h3>Chọn lịch ăn</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-03-1.png"} />
                </a>
                <h3>Đặt hàng</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-01-2.png"} />
                </a>
                <h3>Giao hàng</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={"menu"}>
          <h2>
            Menu tuần
          </h2>
          <div className={"menu-wrapper"}>
            <div className={"menu-item"}>
              <h3>
                Chế độ ăn giảm cân eat clean
              </h3>
              <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-keto-22-2048x1458.jpg"}/>
            </div>
            <div className={"menu-item"}>
              <h3>
                Chế độ ăn giảm cân eat clean
              </h3>
              <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-keto-22-2048x1458.jpg"}/>
            </div>
          </div>
        </div>

        <div className={"products"} >
          <h2>
            Sản phẩm ăn giảm can
          </h2>
          <Slider {...settings}>
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
            <ProductCard title={""} image={""} />
          </Slider>
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
                <h3>Chọn món ăn</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-2-1.jpg"} />
                </a>
                <h3>Chọn lịch ăn</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-10.png"} />
                </a>
                <h3>Đặt hàng</h3>
              </div>
            </div>
            <div className={"item"}>
              <div className={"wrap vertical"}>
                <a href={"#"}>
                  <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/che-do-an-giam-can-08.png"} />
                </a>
                <h3>Giao hàng</h3>
              </div>
            </div>
          </div>
        </div>

        {/*blog*/}
        <div className={"wrap-baseline blog"}>
          <h2>
            Tin tức
          </h2>
          <Slider {...{
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 5000,
                    cssEase: "linear",
                    className: "slider center"
                  }}>
            <BlogCard color={"text-white"} title={""} image={""} />
            <BlogCard color={"text-white"} title={""} image={""} />
            <BlogCard color={"text-white"} title={""} image={""} />
            <BlogCard color={"text-white"} title={""} image={""} />
            <BlogCard color={"text-white"} title={""} image={""} />
          </Slider>
        </div>
        <div id="fb-root"></div>
        <div className="fb-page"
             data-href="https://www.facebook.com/facebook"
             data-width="380"
             data-hide-cover="false"
             data-show-facepile="false"></div>
      </AsyncWrapper>
    </>
  );
}

export default HomePage;
