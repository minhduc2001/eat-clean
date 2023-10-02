import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box, Container } from "@mui/material";
import Header from "./Header";

function LayoutWrapper() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutWrapper;
