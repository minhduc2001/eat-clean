import Card from "@/components/Card";
import Categories from "@/components/Categories";
import Helmet from "@/components/Helmet";
import Swiper from "@/components/Swiper";
import AsyncWrapper from "@/layouts/AsyncWrapper";
import React from "react";

function HomePage() {
  return (
    <>
      <Helmet title="Home" description="home page" />
      <AsyncWrapper loading={false} fulfilled={Boolean([])}>
        <div>
          <Categories></Categories>
        </div>
        <div className="h-screen">
          <Card
            title="Côm bô trà gọi lứt đông trùng"
            description=""
            amount={220000}
            image="https://i.imgur.com/gjML3hG.jpg"
            discount={27}
          ></Card>
        </div>
      </AsyncWrapper>
    </>
  );
}

export default HomePage;
