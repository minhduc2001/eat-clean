import React from "react";
import "./index.scss"
import {Divider, TextField, Button} from "@mui/material";
import {Badge, Radio, Space} from "antd";

function OrderPage() {
    return (
        <div className={"container-content h-[100vh] flex flex-col items-center"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2 className={"text-center"}>
                    Thông tin giao hàng
                </h2>
            </div>
            <div className={"w-9/12 mt-10"}>
                <div className="flex justify-between h-full">
                    <div className="fieldset flex flex-col w-1/3">
                        <h3 className={"font-semibold text-xl"}>Thông tin nhận hàng</h3>
                        <TextField id="outlined-basic" label="Họ và tên" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Tỉnh thành" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Quận huyện" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Phường xã" variant="outlined" style={{marginTop: 10}} size={'small'} />
                        <TextField id="outlined-basic" label="Ghi chú" variant="outlined" style={{marginTop: 10}} size={'small'} />
                    </div>


                    <div className="fieldset flex flex-col w-1/3">
                        <h3 className={"font-semibold text-xl"}>Phương thức thanh toán</h3>
                        <Radio.Group  value={1} className={"mt-5"}>
                            <Space direction="vertical">
                                <Radio value={1}>Thanh toán khi nhận hàng</Radio>
                                <Radio value={2}>Thanh toán bằng MOMO</Radio>
                                <Radio value={3}>Thanh toán bằng VNPay</Radio>
                            </Space>
                        </Radio.Group>
                    </div>

                    <div className="fieldset flex flex-col w-1/4">
                        <h3 className={"font-semibold text-xl"}>Đơn hàng</h3>
                        <div className={"overflow-scroll min-h-[200px]"}>
                            <ProductOrder />
                            <Divider />
                            <ProductOrder />
                            <Divider />
                            <ProductOrder />
                            <Divider />
                            <ProductOrder />
                        </div>
                        <Divider />
                        <div className={"flex items-center justify-between mb-5  mt-5"}>
                            <TextField id="outlined-basic" label="Áp mã giảm giá" variant="outlined" style={{marginTop: 10}} size={'small'} />
                            <Button variant="contained" style={{marginTop: 8}} size="medium">Áp dụng</Button>
                        </div>
                        <Divider />
                        <div className={"mt-5 text-gray-700"}>

                            <div className="title-cart mt-1 flex w-full justify-between">
                                <h3 className="text-xs-left">Tổng tiền</h3>
                                <span className="text-gray-700">2.400.000₫</span>
                            </div>
                            <div className="title-cart flex w-full justify-between">
                                <h3 className="text-xs-left">Giảm giá</h3>
                                <span className="text-xs-right discount_amount">0₫</span>
                            </div>

                            <div className="title-cart flex w-full justify-between mb-4">
                                <h3 className="text-xs-left">Tạm tính tiền</h3>
                                <span className="text-gray-700">2.400.000₫</span>
                            </div>

                            <Divider />
                            <div className="title-cart mt-4 flex w-full justify-between">
                                <h3 className="text-xs-left text-2xl font-semibold">Tổng cộng</h3>
                                <span className="text-gray-700">2.400.000₫</span>
                            </div>
                        </div>
                        <Button variant={'contained'} style={{marginTop: 10}}>Thanh toán</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}


function ProductOrder() {
    return (
        <div className="flex h-full items-center max-h-[100px]">
            <div className="w-[50px]">
                <Badge count={5}>
                    <a href="https://wisefood.vn/san-pham/tra-gao-lut-dong-trung-wise-food-300g-20-goi-hop-giam-stress-hieu-qua" className="product-images1  pos-relative embed-responsive embed-responsive-1by1" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                        <img className="w-full" src="https://i.imgur.com/SurtL55.png" alt="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả" />
                    </a>
                </Badge>
            </div>
            <div className="product-cart-infor flex justify-around w-full border-y-green-900 pl-5">
                <div className="w-3/6">
                    <h3 className="product-name">
                        <a className="text-gray-700 text-sm"
                           href="" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                            Stress Hiệu Quả</a>  </h3>
                    <span className="variant-title"></span>
                </div>

                <div className="cart-price ml-10">
                    <span className="product-price price text-gray-700 text-sm">2.400.000₫</span>
                </div>
            </div>
        </div>
    )
}


export default OrderPage;