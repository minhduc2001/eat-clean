import React from "react";

const Homepage = React.lazy(() => import("@/pages/HomePage"));
const PageNotFound = React.lazy(() => import("@/pages/404"));
const CartPage = React.lazy(() => import("@/pages/Cart"));
const BlogPage = React.lazy(() => import("@/pages/BlogPage"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/blog/:slug",
    component: BlogPage,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
