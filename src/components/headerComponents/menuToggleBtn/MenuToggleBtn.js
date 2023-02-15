import { useState } from "react";
import "./MenuToggleBtn.css";

export default function MenuToggleBtn() {
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <div
            onClick={() => setActiveMenu((x) => !x)}
            className={activeMenu ? "menu-toggle menu-active" : "menu-toggle menu-not-active"}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
