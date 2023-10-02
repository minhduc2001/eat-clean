import Swiper from "@/components/Swiper";
import AsyncWrapper from "@/layouts/AsyncWrapper";
import React from "react";

function HomePage() {
  return (
    <AsyncWrapper loading={false} fulfilled={Boolean([])}>
      <div className="h-screen"></div>
    </AsyncWrapper>
  );
}

export default HomePage;
