import React, {useEffect, useState} from "react";
import "./index.scss"
import {Divider, TextField, Button, Backdrop} from "@mui/material";
import {Badge, Form, Input, QRCode, Radio, Space} from "antd";
import {useLocation} from "react-router-dom";
import Cart from "@/components/cart";
import {formatCurrency} from "@/utils/convert.tsx";
import {useAppDispatch} from "@/redux/hooks.ts";
import {checkPromotion, paymentProduct} from "@/redux/features/cartSlide.ts";

function OrderPage() {
    const location = useLocation()
    const cart = location.state?.data
    const [open, setOpen] = useState(false)
    const [qrcode, setQrcode] = useState("")
    const [discount, setDiscount] = useState({discount: 0})
    const [code, setCode] = useState("")
    const dispatch = useAppDispatch()
    const totalCost = cart ? cart.reduce((total, item) => {
        const itemCost = (item.foods?.price ? item.foods?.price : 0) * item.quantity;
        return total + itemCost;
    }, 0) : 0;

    const handleOrder = (e: any) => {
        const cartConvert = cart.map(c => ({...c, foods: {...c.foods, categories: c.foods.categories.map(i => i.id)}}))
        const data = {...e, price: totalCost, carts: cartConvert, promotion: discount}
        dispatch(paymentProduct(data)).then((it) => {
            console.log(it)
            setOpen(true)
            window.location.href = it.payload;
        })
    }

    const handlePromotion = () => {
        dispatch(checkPromotion(code)).then((it) => {
            setDiscount(it.payload)
        })
    }

    return (
        <div className={"container-content h-[100vh] flex flex-col items-center"}>
            <div style={{fontSize: "20pt", marginTop: "30px"}}>
                <h2 className={"text-center"}>
                    Thông tin giao hàng
                </h2>
            </div>
            <div className={"w-9/12 mt-10"}>
                <Form
                    className={'w-full'}
                    onFinish={handleOrder}
                >
                <div className="flex justify-between h-full">
                    <div className="fieldset flex flex-col w-1/3">
                        <h3 className={"font-semibold text-xl"}>Thông tin nhận hàng</h3>
                            <Form.Item
                                name="username"
                                className={'mt-3'}
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your name"} />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone!' }]}
                            >
                                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your phone"} />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                rules={[{ required: true, message: 'Please input your address!' }]}
                            >
                                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your address"} />
                            </Form.Item>
                            <Form.Item
                                name="note"
                                rules={[{ required: false, message: 'Please input your email!' }]}
                            >
                                <Input.TextArea allowClear className={"p-2"} bordered={true} placeholder={"Enter your note"} />
                            </Form.Item>
                    </div>


                    <div className="fieldset flex flex-col w-1/3">
                        <h3 className={"font-semibold text-xl"}>Phương thức thanh toán</h3>
                        <Radio.Group  value={1} className={"mt-5"}>
                            <Space direction="vertical">
                                <Radio value={1}>Thanh toán bằng MOMO</Radio>
                            </Space>
                        </Radio.Group>
                    </div>

                    <div className="fieldset flex flex-col w-1/4">
                        <h3 className={"font-semibold text-xl"}>Đơn hàng</h3>
                        <div className={"overflow-scroll min-h-[200px]"}>
                            {
                                cart ? cart.map(it => {
                                    return (
                                        <>
                                            <ProductOrder key={it.id} data={it} />
                                            <div className={"w-full pl-3 pr-3"}><Divider /></div>
                                        </>
                                    )
                                }) : <div></div>
                            }
                        </div>
                        <Divider />
                        <div className={"flex items-center justify-between mb-5  mt-5"}>
                            <TextField onChange={(event) => {
                                setCode(event.target.value)}} id="outlined-basic" label="Áp mã giảm giá" variant="outlined" value={code} style={{marginTop: 10}} size={'small'} />
                            <Button onClick={handlePromotion} variant="contained" style={{marginTop: 8}} size="medium">Áp dụng</Button>
                        </div>
                        <Divider />
                        <div className={"mt-5 text-gray-700"}>

                            <div className="title-cart mt-1 flex w-full justify-between">
                                <h3 className="text-xs-left">Tổng tiền</h3>
                                <span className="text-gray-700">{formatCurrency(totalCost)}</span>
                            </div>
                            <div className="title-cart flex w-full justify-between">
                                <h3 className="text-xs-left">Giảm giá</h3>
                                <span className="text-xs-right discount_amount">{formatCurrency((discount.discount/100) * totalCost)}</span>
                            </div>

                            <div className="title-cart flex w-full justify-between mb-4">
                                <h3 className="text-xs-left">Tạm tính tiền</h3>
                                <span className="text-gray-700">{formatCurrency(totalCost - (discount.discount/100) * totalCost)}</span>
                            </div>

                            <Divider />
                            <div className="title-cart mt-4 flex w-full justify-between">
                                <h3 className="text-xs-left text-2xl font-semibold">Tổng cộng</h3>
                                <span className="text-gray-700">{formatCurrency(totalCost - (discount.discount/100) * totalCost)}</span>
                            </div>
                        </div>
                        <Button type={'submit'} variant={'contained'} style={{marginTop: 10}}>Thanh toán</Button>
                    </div>
                </div>
                </Form>
            </div>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={false}
                onClick={() => setOpen(false)}
            >
                <div className={'w-10/12 bg-[#B52275] h-[80vh] rounded flex flex-col'}>
                    <div className={'h-[50vh] w-full flex items-center justify-center'}>
                        <div className={'w-7/12 h-full flex-col flex items-center justify-center'}>
                            <div className={'w-full flex justify-center'}>
                                <img className={'w-[100px] h-[100px] mr-5'} src={'logo-mm.png'} />
                                <div className={'bg-white p-1 rounded'}>
                                    <img className={'w-[90px] h-[90px]'} src={'logo.png'} />
                                </div>
                            </div>

                            <span className={'text-xl mt-5'}>Quét mã QRCODE bằng ứng dụng MOMO để thực hiện thanh toán</span>
                        </div>
                        <div className={'h-[40vh] rounded bg-white w-1/5 flex flex-col items-center justify-around'}>
                            <QRCode size={250}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={qrcode} />

                            <span className={'text-black'}>Giao dịch sẽ bị hủy sau: 15:00</span>
                        </div>
                    </div>
                    <div className={'h-[30vh] w-full bg-gray-900 flex justify-around items-center'}>
                        <div className={'flex flex-col items-center'}>
                            <img className={'w-[70px] h-[70px] mr-5'} src={'logo-mm.png'} />
                            <p className={'font-semibold text-center mr-5'}>Bước 1</p>
                            <span>Mở ứng dụng Momo</span>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <img className={'w-[70px] h-[70px] mr-5'} src={'logo-mm.png'} />
                            <p className={'font-semibold mr-5'}>Bước 1</p>
                            <span>Mở ứng dụng Momo</span>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <img className={'w-[70px] h-[70px] mr-5'} src={'logo-mm.png'} />
                            <p className={'font-semibold mr-5'}>Bước 1</p>
                            <span>Mở ứng dụng Momo</span>
                        </div>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}


function ProductOrder(props: any) {
    console.log(props, 'ssss')
    return (
        <div className="flex h-full items-center max-h-[100px]">
            <div className="w-[50px]">
                <Badge count={props.data.quantity}>
                    <a className="product-images1  pos-relative embed-responsive embed-responsive-1by1" title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
                        <img className="w-full" src={props?.data?.foods?.imgs[0]} alt="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả" />
                    </a>
                </Badge>
            </div>
            <div className="product-cart-infor flex justify-around w-full border-y-green-900 pl-5">
                <div className="w-3/6">
                    <h3 className="product-name">
                        <a className="text-gray-700 text-sm"
                           href="">
                            {props?.data?.foods?.name}</a>  </h3>
                    <span className="variant-title"></span>
                </div>

                <div className="cart-price ml-10">
                    <span className="product-price price text-gray-700 text-sm">{formatCurrency(props?.data?.foods?.price)}</span>
                </div>
            </div>
        </div>
    )
}


export default OrderPage;