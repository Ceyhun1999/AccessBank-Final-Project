import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [activeLink, setActiveLink] = useState(true);

    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__left">
                        <a className="nav__logo"></a>
                        <div className="nav__left-link">
                            <a>KREDİTLƏR</a>
                        </div>
                        <div className="nav__left-link">
                            <a>DEPOZİTLƏR</a>
                        </div>
                        <div className="nav__left-link">
                            <a>KARTLAR</a>
                        </div>
                        <div className="nav__left-link testing ">
                            <a>ONLAYN XİDMƏTLƏR</a>
                        </div>
                        <div className="nav__left-link testing2">
                            <a>DİGƏR XİDMƏTLƏR</a>
                        </div>
                    </div>
                    <div className="nav__right">
                        <div className="nav__right-firstItem">
                            <div className="nav__right-line"></div>
                            <div className="nav__right-links">
                                <div
                                    onClick={() => setActiveLink(!activeLink)}
                                    className={
                                        activeLink
                                            ? "nav__right-item nav__right-item--active"
                                            : "nav__right-item"
                                    }>
                                    <a>Fərdi</a>
                                </div>
                                <div
                                    onClick={() => setActiveLink(!activeLink)}
                                    className={!activeLink ? "nav__right-item--active" : " "}>
                                    <a>Biznes</a>
                                </div>
                            </div>
                        </div>
                        <div className="nav__right-secondItem">
                            <div className="nav__right-controls">
                                <div className="nav__language">
                                    <div className="nav__language-main">
                                        <div className="nav__language-icon"></div>
                                        <div className="nav__language-text">AZ</div>
                                    </div>
                                    <div className="nav__language-other">
                                        <div className="nav__language-text">EN</div>
                                        <div className="nav__language-text">RU</div>
                                    </div>
                                </div>
                                <div className="nav__search"></div>
                            </div>
                            <div className="menu-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
