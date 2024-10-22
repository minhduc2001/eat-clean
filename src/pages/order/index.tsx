import React, {useEffect, useState} from "react";
import "./index.scss"
import {Divider, TextField, Backdrop, CircularProgress} from "@mui/material";
import {Badge, Form, Input, Button, Radio, Space, Steps} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {formatCurrency} from "@/utils/convert.tsx";
import {useAppDispatch} from "@/redux/hooks.ts";
import {checkPromotion, paymentProduct} from "@/redux/features/cartSlide.ts";
import {toast} from "react-toastify";
import Helmet from "@/components/Helmet.tsx";

function OrderPage() {
  const location = useLocation()
  const cart = location.state?.data
  const [open, setOpen] = useState(false)
  const [discount, setDiscount] = useState({discount: 0})
  const [code, setCode] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const totalCost = cart ? cart.reduce((total, item) => {
    const itemCost = (item.foods?.price ? item.foods?.price : 0) * item.quantity;
    return total + itemCost;
  }, 0) : 0;

  const [current, setCurrent] = useState(0);  // Tracks the current step
  const [form] = Form.useForm();

  // Form data, if needed to pass between steps
  const [formData, setFormData] = useState({methodType: "COD"});
  const handleOrder = () => {
    setOpen(true)
    console.log(formData)
    const cartConvert = cart.map(c => ({...c, foods: {...c.foods, categories: c.foods.categories.map(i => i.id)}, user: null}))
    const data = {
      ...formData,
      price: totalCost - (discount.discount / 100) * totalCost,
      carts: cartConvert,
      promotion: discount
    }
    dispatch(paymentProduct(data)).unwrap().then((it) => {
      setOpen(false)
      console.log(it)
      if (it?.includes("http")) {
        window.location.href = it;
        return;
      }
      toast.success("Đặt hàng thành công")
      navigate("/")
    })
  }

  const handlePromotion = () => {
    dispatch(checkPromotion(code)).then((it) => {
      setDiscount(it.payload)
    })
  }

  const steps = [
    {
      title: 'First Step',
      content: (
          <Form
              form={form}
              name="step1"
              layout="vertical"
              initialValues={formData}
          >
            <div className="flex flex-col flex-1">
              <h3 className={"font-semibold text-xl"}>Thông tin nhận hàng</h3>
              <Form.Item
                  name="username"
                  className={'mt-3'}
                  rules={[{required: true, message: 'Please input your name!'}]}
              >
                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your name"}/>
              </Form.Item>
              <Form.Item
                  name="phone"
                  rules={[{required: true, message: 'Please input your phone!'}]}
              >
                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your phone"}/>
              </Form.Item>
              <Form.Item
                  name="address"
                  rules={[{required: true, message: 'Please input your address!'}]}
              >
                <Input allowClear className={"p-2"} bordered={true} placeholder={"Enter your address"}/>
              </Form.Item>
              <Form.Item
                  name="note"
                  rules={[{required: false, message: 'Please input your email!'}]}
              >
                <Input.TextArea allowClear className={"p-2"} bordered={true} placeholder={"Enter your note"}/>
              </Form.Item>
            </div>
          </Form>
      ),
    },
    {
      title: 'Second Step',
      content: (
          <Form
              form={form}
              name="step2"
              layout="vertical"
              initialValues={formData}
          >
            <div className="fieldset flex flex-col flex-1">
              <h3 className={"font-semibold text-xl"}>Phương thức thanh toán</h3>
              <Form.Item
                  name={"methodType"}
                  required={true}
              >
                <Radio.Group className={"mt-5 flex-col flex"}>
                  <Space direction="vertical">
                    <Radio value={"COD"}>Thanh toán khi nhận hàng</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
          </Form>
      ),
    },
    {
      title: 'Review & Submit',
      content: (
          <div className="flex flex-col">
            <h3 className={"font-semibold text-xl"}>Đơn hàng</h3>
            <div className={"overflow-scroll min-h-[200px] pt-5"}>
              {
                cart ? cart.map(it => {
                  return (
                      <>
                        <ProductOrder key={it.id} data={it}/>
                        <div className={"w-full pl-3 pr-3 mb-4"}><Divider/></div>
                      </>
                  )
                }) : <div></div>
              }
            </div>
            <Divider/>
            <div className={"flex items-center justify-between mb-5  mt-5"}>
              <TextField onChange={(event) => {
                setCode(event.target.value)
              }} id="outlined-basic" label="Áp mã giảm giá" variant="outlined" value={code} style={{marginTop: 10}}
                         size={'small'}/>
              <Button onClick={handlePromotion} variant="contained" style={{marginTop: 8}} size="medium">Áp
                dụng</Button>
            </div>
            <Divider/>
            <div className={"mt-5 text-gray-700"}>

              <div className="title-cart mt-1 flex w-full justify-between">
                <h3 className="text-xs-left">Tổng tiền</h3>
                <span className="text-gray-700">{formatCurrency(totalCost)}</span>
              </div>
              <div className="title-cart flex w-full justify-between">
                <h3 className="text-xs-left">Giảm giá</h3>
                <span
                    className="text-xs-right discount_amount">{formatCurrency((discount.discount / 100) * totalCost)}</span>
              </div>

              <div className="title-cart flex w-full justify-between mb-4">
                <h3 className="text-xs-left">Tạm tính tiền</h3>
                <span
                    className="text-gray-700">{formatCurrency(totalCost - (discount.discount / 100) * totalCost)}</span>
              </div>

              <Divider/>
              <div className="title-cart mt-4 flex w-full justify-between">
                <h3 className="text-xs-left text-2xl font-semibold">Tổng cộng</h3>
                <span
                    className="text-gray-700">{formatCurrency(totalCost - (discount.discount / 100) * totalCost)}</span>
              </div>
            </div>
          </div>
      ),
    },
  ];

  const next = async () => {
    try {
      const values = await form.validateFields();
      setFormData({...formData, ...values});  // Collect form data

      setCurrent(current + 1);
      form.resetFields();  // Clear form for next step
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
      <div className={"container-content flex flex-col items-center"}>
        <Helmet title={"Đặt hàng"}/>
        <div style={{fontSize: "20pt", marginTop: "30px"}}>
          <h2 className={"text-center"}>
            Thông tin giao hàng
          </h2>
        </div>
        <div className={"w-9/12 mt-10"}>
          <Steps current={current} items={steps}/>
          <div className="mt-10">
            {steps[current].content}
          </div>

          <div className="w-full flex justify-end mb-10">
            {current > 0 && (
                <button
                    onClick={() => prev()}
                    className="border rounded p-2 mt-5 mr-5"
                >
                  Previous
                </button>
            )}
            {current < steps.length - 1 && (
                <button
                    onClick={() => next()}
                    className="bg-blue-600 text-white rounded py-2 px-5 mt-5"
                >
                  Next
                </button>
            )}
            {current === steps.length - 1 && (
                <button
                    onClick={() => handleOrder()}
                    className="bg-blue-600 text-white rounded py-2 px-5 mt-5"
                >
                  Submit
                </button>
            )}
          </div>
        </div>


        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={open}
            onClick={() => setOpen(false)}
        >
          <CircularProgress/>
        </Backdrop>
      </div>
  );
}


function ProductOrder(props: any) {
  return (
      <div className="flex h-full items-center max-h-[100px] mb-1">
        <div className="w-[50px]">
          <Badge count={props.data.quantity}>
            <a className="product-images1  pos-relative embed-responsive embed-responsive-1by1"
               title="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả">
              <img className="w-full" src={props?.data?.foods?.imgs[0]}
                   alt="Trà Gạo Lứt Đông Trùng Wise Food 300g, 20 Gói /Hộp Giảm Stress Hiệu Quả"/>
            </a>
          </Badge>
        </div>
        <div className="product-cart-infor flex justify-around w-full border-y-green-900 pl-5">
          <div className="w-3/6">
            <h3 className="product-name">
              <a className="text-gray-700 text-sm line-clamp-2"
                 href="">
                {props?.data?.foods?.name}
              </a>
            </h3>
            <span className="variant-title"></span>
          </div>

          <div className="cart-price ml-10">
            <span
                className="product-price price text-gray-700 text-sm">{formatCurrency(props?.data?.foods?.price)}</span>
          </div>
        </div>
      </div>
  )
}


export default OrderPage;
