import { useEffect, useState } from "react";

import MenuToggleBtn from "../menuToggleBtn/MenuToggleBtn";
import NavRightSecondItem from "../navRightSecondItem/NavRightSecondItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import NavLeft from "../navLeft/NavLeft";
import MenuMobile from "../menuMobile/MenuMobile";
import NavLanguage from "../navLanguage/NavLanguage";

import "./Header.css";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const onChangeActiveMenu = () => setActiveMenu((x) => !x);

    useEffect(() => {
        const body = document.querySelector("body");
        activeMenu ? (body.style.overflow = "hidden") : (body.style.overflow = "");
    }, [activeMenu]);

    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <NavLeft />
                    <div className="nav__right">
                        {!activeMenu ? <NavRightFirstItem /> : null}
                        {activeMenu ? <NavLanguage /> : null}
                        {<NavRightSecondItem />}
                        <MenuToggleBtn activeMenu={activeMenu} onChangeActiveMenu={onChangeActiveMenu} />
                    </div>
                </nav>
                {activeMenu ? <MenuMobile /> : null}
            </div>
        </header>
    );
}
