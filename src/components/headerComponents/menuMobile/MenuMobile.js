import { useState } from "react";
import { navBarData } from "../../../data/Data";
import MenuMobileItem from "../menuMobileItem/menuMobileItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import "./MenuMobile.css";

export default function MenuMobile() {
    return (
        <div className="menu-mobile">
            <div className="menu-mobile__header">
                <NavRightFirstItem />
                <div className="menu-mobile__search"></div>
            </div>
            <div className="menu-mobile__content">
                <ul>
                    {navBarData.data.map((item, idx) => {
                        return <MenuMobileItem key={idx} data={item} idx={idx} />;
                    })}
                </ul>
            </div>
            <div className="menu-mobile__footer">asagi</div>
        </div>
    );
}
