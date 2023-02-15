import "./NavRightSecondItem.css";

export default function NavRightSecondItem() {
    return (
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
                <div className="nav__search">
                    <div className="nav__search-inner"></div>
                </div>
            </div>
        </div>
    );
}
