import "./FooterBottom.css";

export default function FooterBottom() {
    return (
        <div className="footer__bottom">
            <div className="footer__bottom-item1">
                <div className="footer__icons">
                    <span className="facebook"></span>
                    <span className="inst"></span>
                    <span className="tiktok"></span>
                    <span className="linkedin"></span>
                    <span className="twitter"></span>
                    <span className="whatsapp"></span>
                    <span className="telegram"></span>
                </div>
                <div className="footer__logos">
                    <span className="footer__logo1"></span>
                    <span className="footer__logo2"></span>
                </div>
            </div>
            <div className="footer__bottom-item2">
                <span className="msp"></span>
                <span className="infobank"></span>
                <span className="egov"></span>
                <span className="adif"></span>
            </div>
            <div className="footer__bottom-item3">
                <span className="credits">© 2023 «AccessBank» QSC. Bütün hüquqlar qorunur</span>
                <span className="credits-link"></span>
            </div>
        </div>
    );
}
