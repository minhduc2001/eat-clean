import "./index.scss";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Link, useLocation, useNavigate} from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Badge, Drawer, Menu, Dropdown} from "antd";
import {useAppSelector} from "@/redux/hooks.ts";
import {RootState} from "@/redux/store.ts";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {MenuOutlined} from "@mui/icons-material";
function Header() {
    const [visible, setVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isLogin = localStorage.getItem("token")
    const totalOrder = useAppSelector((root: RootState) => root.cart.totalOrder)
    const navigate = useNavigate()
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <a href="/product#loai-mot-nhe">Loai mot nhe</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="/product#loai-hai-nhe">Loai hai nhe</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="/product#loai-ba-nhe">Loai ba nhe</a>
            </Menu.Item>
        </Menu>
    );

    const [numberAccess, setNumberAccess] = useState(0);

    // Handle window resize
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            if (location.pathname == "/history" || location.pathname == "/cart" || location.pathname == "/order") {
                navigate("/login", {replace: true})
            }
        }
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        console.log('access')

        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="header">
            <Drawer
                title="Eat Clean"
                placement={"left"}
                closable={true}
                onClose={onClose}
                open={visible}
                key={"left"}
            >
                <div className="nav">
                    <ul className="flex-col gap-10">
                        <li className="text-blue-500">
                            <Link to="/">
                                <HomeRoundedIcon style={{color: "#0b850b", fontSize: 30}} />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/introduce"} className="menu-item text-gray-700">
                                Giới thiệu
                            </Link>
                        </li>
                        <li onClick={() => navigate("/product")}>
                            <Dropdown overlay={menu} trigger={['hover']}>
                                <span className="menu-item text-gray-700">Sản phẩm</span>
                            </Dropdown>
                        </li>
                        <li>
                            <Link to={"/tool"} className="menu-item text-gray-700">
                                Combo
                            </Link>
                        </li>
                        <li>
                            {
                                !isLogin ?
                                    <></> :
                                    <Link to={"/history"} className="menu-item text-gray-700">
                                        Lịch sử đặt hàng
                                    </Link>
                            }
                        </li>
                        <li>
                            {
                                !isLogin ?
                                    <Link to={"/login"} className="menu-item text-gray-700">
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
                                    <button
                                        className="menu-item text-gray-700"
                                        onClick={() => {
                                        localStorage.clear()
                                        location.reload()
                                        navigate("/", {replace: true})
                                    }}>
                                        <LogoutIcon />
                                    </button>
                            }
                        </li>
                    </ul>
                </div>
            </Drawer>
            <div className="container relative">
                {windowWidth < 768 && (
                    <button
                        onClick={showDrawer}
                        className="absolute top-5 left-0"
                    >
                        <MenuOutlined />
                    </button>
                )}
                <div className="logo-header">
                    <img src="/logo.png" />
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
                        <li onClick={() => navigate("/product")}>
                            <Dropdown className="text-gray-700" overlay={menu} trigger={['hover']}>
                                <span className="menu-item">Sản phẩm</span>
                            </Dropdown>
                        </li>
                        <li>
                            <Link to={"/combo"}>
                                Combo
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
                                        window.location.href = "/"
                                    }}>
                                       <LogoutIcon />
                                    </Button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
