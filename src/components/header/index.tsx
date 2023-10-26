import { formatCurrency, roundDownToNearestThousand } from "@/utils/convert.tsx";
import "./index.scss";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {useLocation} from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Badge} from "antd";
function Header() {

    const location = useLocation()
    console.log(location.pathname)

    const isLogin = localStorage.getItem("user")

    return (
        <div className="header">
            <div className={"container"}>
                <div className="logo-header">
                    <img src="https://healthyeating.shop/wp-content/uploads/2020/12/LOGO-healthy-TRUNG-HIEU-01.png" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="/">
                                <HomeRoundedIcon style={{color: "#0b850b", fontSize: 30}} />
                            </a>
                        </li>
                        <li>
                            <a href={"/introduce"}>
                                Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a href={"/product"}>
                                Sản phẩm
                            </a>
                        </li>
                        <li>
                            <a href={"/tool"}>
                                Công cụ
                            </a>
                        </li>
                        <li>
                            <a href={"/blog"}>
                                Blog
                            </a>
                        </li>
                        <li>
                            {
                                !isLogin ?
                                <a href={"/login"} >
                                    Đăng nhập
                                </a> :
                                <a href={"/cart"}>
                                    <Badge count={10}>
                                        <ShoppingBagOutlinedIcon />
                                    </Badge>
                                </a>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                location.pathname.length > 1 ?
                        <div className={"bread-crumb"}>
                            <p>Trang chủ / Sản phẩm</p>
                        </div>
                    : <></>
            }

        </div>
    );
}

export default Header;
