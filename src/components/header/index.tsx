import { formatCurrency, roundDownToNearestThousand } from "@/utils/convert.tsx";
import "./index.scss";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Link, useLocation} from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Badge} from "antd";
import {useAppSelector} from "@/redux/hooks.ts";
import {RootState} from "@/redux/store.ts";
import AsyncWrapper from "@/layouts/AsyncWrapper.tsx";
import {LoadingStatus} from "@/enums/enum.ts";
import {Button} from "@mui/material";
function Header() {

    const mLocation = useLocation()
    console.log(mLocation.pathname)

    const isLogin = localStorage.getItem("token")

    const totalOrder = useAppSelector((root: RootState) => root.cart.totalOrder)
    console.log(totalOrder)
    return (
        <div className="header">
            <div className={"container"}>
                <div className="logo-header">
                    <img src="logo.png" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">
                                <HomeRoundedIcon style={{color: "#0b850b", fontSize: 30}} />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/introduce"}>
                                Giới thiệu
                            </Link>
                        </li>
                        <li>
                            <Link to={"/product"}>
                                Sản phẩm
                            </Link>
                        </li>
                        <li>
                            <Link to={"/tool"}>
                                Công cụ
                            </Link>
                        </li>
                        <li>
                            <Link to={"/blog"}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            {
                                !isLogin ?
                                    <></> :
                                    <Link to={"/history"}>
                                       Lịch sử đặt hàng
                                    </Link>
                            }
                        </li>
                        <li>
                            {
                                !isLogin ?
                                <Link to={"/login"} >
                                    Đăng nhập
                                </Link> :
                                <Link to={"/cart"}>
                                    <Badge count={totalOrder ?? 1}>
                                        <ShoppingBagOutlinedIcon />
                                    </Badge>
                                </Link>
                            }
                        </li>
                        <li>
                            {
                                !isLogin ?
                                    <></> :
                                    <Button onClick={() => {
                                        localStorage.clear()
                                        location.reload()
                                    }}>
                                       <LogoutIcon />
                                    </Button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                mLocation.pathname.length > 1 ?
                        <div className={"bread-crumb"}>
                            <p>Trang chủ / Sản phẩm</p>
                        </div>
                    : <></>
            }

        </div>
    );
}

export default Header;
