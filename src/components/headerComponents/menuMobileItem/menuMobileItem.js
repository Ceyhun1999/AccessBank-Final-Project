import { useState } from "react";
import "./menuMobileItem.css";

export default function MenuMobileItem({ data, idx }) {
    const [activeLink, setActiveLink] = useState(100);

    const onChangeActiveLink = (idx) => {
        if (idx === activeLink) setActiveLink(100);
        else setActiveLink(idx);
    };

    return (
        <li key={idx}>
            <div onClick={() => onChangeActiveLink(idx)} className="mobile-link">
                <p>{data.link}</p>
                <span></span>
            </div>
            <div
                className={
                    activeLink === idx ? "mobile-link__drop mobile-links-active" : "mobile-link__drop"
                }>
                <ul>
                    {data.drop.map((item, idx) => (
                        <li key={idx}>{item.span}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
