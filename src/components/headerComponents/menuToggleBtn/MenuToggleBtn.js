import "./MenuToggleBtn.css";

export default function MenuToggleBtn({ activeMenu, onChangeActiveMenu }) {
    return (
        <div
            onClick={onChangeActiveMenu}
            className={activeMenu ? "menu-toggle menu-active" : "menu-toggle menu-not-active"}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
