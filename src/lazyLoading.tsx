import React from "react";

const Homepage = React.lazy(() => import("@/pages/home"));
const PageNotFound = React.lazy(() => import("@/pages/404"));
const CartPage = React.lazy(() => import("@/pages/carts/index"));
const OrderPage = React.lazy(() => import("@/pages/order/index"));
const IntroducePage = React.lazy(() => import("@/pages/introduce/index"));
const ProductsPage = React.lazy(() => import("@/pages/products/index"));
const DetailPage = React.lazy(() => import("@/pages/details/index"));
const ToolPage = React.lazy(() => import("@/pages/tool/index"));
const BlogPage = React.lazy(() => import("@/pages/blog/index"));
const BlogDetailPage = React.lazy(() => import("@/pages/blogdetail/index"));
const HistoryPage = React.lazy(() => import("@/pages/history/index"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/introduce",
    component: IntroducePage,
  },
  {
    path: "/product",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    component: DetailPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/order",
    component: OrderPage,
  },
  {
    path: "/tool",
    component: ToolPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/blog/:slug",
    component: BlogDetailPage,
  },
  {
    path: "/history",
    component: HistoryPage,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
