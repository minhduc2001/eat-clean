import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Box, Container } from "@mui/material";
import Header from "@/components/header";
import HomePage from "@/pages/home";
import Footer from "@/components/footer";
import IntroducePage from "@/pages/introduce";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/details";
import CartPage from "@/pages/carts";
import OrderPage from "@/pages/order";

function LayoutWrapper() {
  return (
    <div>
      <Header />
      {/*<Navbar />*/}
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutWrapper;
