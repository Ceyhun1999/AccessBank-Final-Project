import { useState } from "react";
import { navBarData } from "../../data/Data";

import DropDowns from "../dropDowns/DropDowns";
import "./NavLeft.css";

export default function NavLeft() {
    const [activeHeader, setActiveHeader] = useState(false);

    const changeBg = () => {
        let flag = false;
        if (document.documentElement.scrollTop > 0) flag = true;
        else flag = false;
        setActiveHeader(flag);
    };

    window.addEventListener("scroll", changeBg);

    return (
        <div className={activeHeader ? "nav__left sticky" : "nav__left"}>
            <a className="nav__logo-inner">
                <div className="nav__logo"></div>
            </a>
            {navBarData.data.map((item, idx) => {
                let test = "";
                if (idx === 3) test = "testing";
                else if (idx === 4) test = "testing2";
                return (
                    <div key={idx} className="nav__left-link nav__left-link-hover">
                        <a href="access.az" className={test}>
                            {item.link}
                        </a>
                        <DropDowns>{item}</DropDowns>
                    </div>
                );
            })}
        </div>
    );
}

