import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__left">
                        <a className="nav__logo" href="https://www.accessbank.az/az/"></a>
                        <div className="nav__link">
                            <a href="https://www.accessbank.az/az/">KREDİTLƏR</a>
                        </div>
                        <div className="nav__link testing">
                            <a href="https://www.accessbank.az/az/">DEPOZİTLƏR</a>
                        </div>
                        <div className="nav__link">
                            <a href="https://www.accessbank.az/az/">KARTLAR</a>
                        </div>
                        <div className="nav__link">
                            <a href="https://www.accessbank.az/az/">ONLAYN XİDMƏTLƏR</a>
                        </div>
                        <div className="nav__link">
                            <a href="https://www.accessbank.az/az/">DİGƏR XİDMƏTLƏR</a>
                        </div>
                    </div>
                    <div className="nav__right">
                        <div className="nav__right-firstItem">
                            <div className="nav__right-line"></div>
                            <div className="nav__right-links">
                                <a className="nav__right-link " href="">
                                    Fərdi
                                </a>
                                <a className="nav__right-link" href="">
                                    Biznes
                                </a>
                            </div>
                        </div>
                        <div className="nav__right-secondItem"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
