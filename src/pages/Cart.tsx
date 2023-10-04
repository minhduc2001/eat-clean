import Helmet from "@/components/Helmet";
import TableCart from "@/components/TableCart";
import React from "react";

function Cart() {
  return (
    <div className="h-screen">
      <Helmet title="Cart"></Helmet>
      <TableCart></TableCart>
    </div>
  );
}

export default Cart;
