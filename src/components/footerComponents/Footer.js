import { footerData } from "../../data/Data";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        {footerData.data.map((item, idx) => (
                            <div key={idx} className="footer__top-item">
                                <h3 className="footer__top-item-title">{item.title}</h3>
                                {item.spans.map((item, idx) => (
                                    <span key={idx}>{item}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="footer__bottom"></div>
                </div>
            </div>
        </footer>
    );
}
