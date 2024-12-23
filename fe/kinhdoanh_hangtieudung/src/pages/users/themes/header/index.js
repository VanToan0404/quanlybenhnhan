import React, { memo, useState } from "react";
import "./style.scss";
import { BsFacebook, BsInstagram, BsBezier2, BsFillHouseDoorFill, BsMailbox } from "react-icons/bs";
import { AiOutlineShoppingCart, AiFillPhone } from "react-icons/ai";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formater } from '../../../../utils/fomater';
import { ROUTERS } from '../../../../utils/routers';

const Header = () => {
    const [isShowCategories, SetShowCategories] = useState(true);
    const [menus, setMEnus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm",
            path: "",
            inShowSubmenu: false,
            child: [
                { name: "Thịt", path: "" },
                { name: "Rau củ", path: "" },
                { name: "Thức ăn nhanh", path: "" },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li><BsMailbox /> hello@gmail.com</li>
                                <li>miễn phí ship {formater(200000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li><Link to=""><BsFacebook /></Link></li>
                                <li><Link to=""><BsInstagram /></Link></li>
                                <li><Link to=""><IoLogoLinkedin /></Link></li>
                                <li><Link to=""><BsFillHouseDoorFill /></Link><span>Đăng nhập</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>SIVI SHOP</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => {
                                        return (  // Cần trả về giá trị JSX trong map()
                                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header__menu_dropdown">
                                                            {
                                                                menu.child.map((chilItme, chilKey) => (
                                                                    <li key={'${menuKey}-${childKey}'}>
                                                                        <Link to={chilItme.path}>{chilItme.name}</Link>
                                                                    </li>
                                                                ))
                                                            }

                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        );
                                    })
                                }
                                {/* <li>
                                    <ul>
                                        <li>Thịt</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formater(111222)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#"><AiOutlineShoppingCart /><span>5</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories__container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories__all" onClick={() => SetShowCategories(!isShowCategories)}>
                            <CiMenuBurger />Danh sách sản phẩm
                        </div>
                        {
                            isShowCategories && (
                                <ul className={isShowCategories ? "" : "hidden"}>
                                    <li>
                                        <Link to="">Thịt tươi</Link>
                                    </li>
                                    <li>
                                        <Link to="">Rau củ</Link>
                                    </li>
                                    <li>
                                        <Link to="">Nước trái cây</Link>
                                    </li>
                                    <li>
                                        <Link to="">Trái cây</Link>
                                    </li>
                                    <li>
                                        <Link to="">Hải sản</Link>
                                    </li>
                                </ul>
                            )
                        }

                    </div>
                    <div className="col-lg-9 hero__search__container">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form>
                                    <input type="text" placeholder="Bạn đang cần gì?" />
                                    <button type="submit" className="site-btn">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <AiFillPhone />
                                </div>
                                <div className="hero__search__phone__text">
                                    <p>0345687435</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            <div className="hero__text">
                                <span>Trái cây tươi</span>
                                <h2>Rau quả  <br/>
                                Sạch 100%
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default memo(Header);