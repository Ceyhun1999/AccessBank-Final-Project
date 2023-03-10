import { footerData } from "../../../data/Data";
import FooterBottom from "../footerBottom/FooterBottom";
import FooterTop from "../footerTop/FooterTop";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        {footerData.data.map((item, idx) => (
                            <FooterTop key={idx} item={item} idx={idx} />
                        ))}
                    </div>
                    <FooterBottom />
                </div>
            </div>
        </footer>
    );
}
