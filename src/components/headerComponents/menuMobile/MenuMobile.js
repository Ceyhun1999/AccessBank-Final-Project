import { navBarData } from "../../../data/Data";
import FormMobile from "../formMobile/FormMobile";
import MenuMobileItem from "../menuMobileItem/menuMobileItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import SearchMobile from "../searchMobile/SearchMobile";
import "./MenuMobile.css";

export default function MenuMobile({ activeHeader, activeSearchMobile, onChangeActiveSearchMobile }) {
    return (
        <div className={activeHeader ? "menu-mobile menu-mobile__sticky" : "menu-mobile"}>
            <div className="menu-mobile__header">
                {!activeSearchMobile ? (
                    <>
                        <NavRightFirstItem />
                        <SearchMobile
                            activeSearchMobile={activeSearchMobile}
                            onChangeActiveSearchMobile={onChangeActiveSearchMobile}
                        />
                    </>
                ) : (
                    <FormMobile
                        activeSearchMobile={activeSearchMobile}
                        onChangeActiveSearchMobile={onChangeActiveSearchMobile}
                    />
                )}
            </div>
            {!activeSearchMobile ? (
                <>
                    <div className="menu-mobile__content">
                        <ul>
                            {navBarData.data.map((item, idx) => {
                                return <MenuMobileItem key={idx} data={item} idx={idx} />;
                            })}
                        </ul>
                    </div>
                    <div className="menu-mobile__footer">
                        <div className="menu-mobile__footer-item1">
                            <span className="pin"></span>
                            <div className="phone"></div>
                        </div>
                        <div className="footer__icons">
                            <span className="facebook"></span>
                            <span className="inst"></span>
                            <span className="tiktok"></span>
                            <span className="linkedin"></span>
                            <span className="twitter"></span>
                            <span className="whatsapp"></span>
                            <span className="telegram"></span>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}
