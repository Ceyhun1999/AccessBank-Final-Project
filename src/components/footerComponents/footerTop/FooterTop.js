import { useState } from "react";
import "./FooterTop.css";

export default function FooterTop({ item, idx }) {
    const [active, setActive] = useState(false);

    const onChangeActive = () => {
        setActive((x) => !x);
    };

    return (
        <div key={idx} className="footer__top-item">
            <div onClick={onChangeActive}>
                <h3 className="footer__top-item-title">{item.title}</h3>
                <span className={active ? "footer__arrow footer__arrow-active" : "footer__arrow"}></span>
            </div>
            <div className={active ? "footer__d-block" : ""}>
                {item.spans.map((item, idx) => (
                    <span className="footer__link" key={idx}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
