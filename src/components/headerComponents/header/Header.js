import { useEffect, useState } from "react";
import MenuToggleBtn from "../menuToggleBtn/MenuToggleBtn";
import NavRightSecondItem from "../navRightSecondItem/NavRightSecondItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import NavLeft from "../navLeft/NavLeft";
import MenuMobile from "../menuMobile/MenuMobile";
import NavLanguage from "../navLanguage/NavLanguage";
import "./Header.css";
import Form from "../form/Form";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);

    const onChangeActiveMenu = () => setActiveMenu((x) => !x);
    const onChangeActiveSearch = () => setActiveSearch((x) => !x);

    useEffect(() => {
        const body = document.querySelector("body");
        activeMenu ? (body.style.overflow = "hidden") : (body.style.overflow = "");
    }, [activeMenu]);

    return (
        <header>
            <div className="header-content ">
                <nav className="nav">
                    <a className="nav__logo-inner">
                        <div className="nav__logo"></div>
                    </a>
                    <div className={activeSearch ? "nav__content-none" : "nav__content"}>
                        <NavLeft />
                        <div className="nav__right">
                            {!activeMenu ? <NavRightFirstItem /> : null}
                            {activeMenu ? <NavLanguage /> : null}
                            <NavRightSecondItem onChangeActiveSearch={onChangeActiveSearch} />
                            <MenuToggleBtn activeMenu={activeMenu} onChangeActiveMenu={onChangeActiveMenu} />
                        </div>
                    </div>
                </nav>

                {activeMenu ? <MenuMobile /> : null}
            </div>
        </header>
    );
}
