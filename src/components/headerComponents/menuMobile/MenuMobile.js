import { navBarData } from "../../../data/Data";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import "./MenuMobile.css";

export default function MenuMobile() {
    return (
        <>
            <div className="menu-mobile">
                <div className="menu-mobile__header">
                    <NavRightFirstItem />
                    <div className="menu-mobile__search"></div>
                </div>
                <div className="menu-mobile__content">
                    <ul>
                        {navBarData.data.map((item) => (
                            <li>
                                <p>{item.link}</p>
                                <span></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu-mobile__footer">asagi</div>
            </div>
        </>
    );
}
