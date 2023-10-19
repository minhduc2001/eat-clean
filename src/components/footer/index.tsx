import React from "react";
import "./index.scss"

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"logo-footer"}>
                <a>
                    <img src={"https://healthyeating.shop/wp-content/uploads/2020/12/LOGO-healthy-TRUNG-HIEU-01.png"}/>
                </a>
            </div>
            <div className={"footer-info"}>
                <h3>Giờ hoạt động</h3>
                <p>
                    <span>
                        Từ 8:00 AM - 10:00 PM
                        <br/>
                        <br/>
                        Địa chỉ: 219 Dương Bá Trạc, Phường 1, Quận 8 TpHCM
                        <br/>
                        <br/>
                        Hotline: 078 663 1194
                    </span>
                </p>
            </div>
            <div className={"footer-info"}>
                <h3>Giờ hoạt động</h3>
                <p>
                    <span>
                        Từ 8:00 AM - 10:00 PM
                        <br/>
                        <br/>
                        Địa chỉ: 219 Dương Bá Trạc, Phường 1, Quận 8 TpHCM
                        <br/>
                        <br/>
                        Hotline: 078 663 1194
                    </span>
                </p>
            </div>
            <div className={"facebook-footer"}>
                <h3>Chúng tôi trên facebook</h3>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Featcleanfeed&width=340&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="200" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    );
}
export default Footer;
