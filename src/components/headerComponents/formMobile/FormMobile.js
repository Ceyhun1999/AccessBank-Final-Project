import "./FormMobile.css";

export default function FormMobile({ onChangeActiveSearchMobile, activeSearchMobile }) {
    return (
        <div className="form-mobile">
            <input
                type="text"
                className="search__input-mobile"
                placeholder="Axtardığınız məlumatı daxil edin - Sizi nə maraqlandırır?"
            />
            <div onClick={onChangeActiveSearchMobile} className="search__close-btnMobile"></div>
        </div>
    );
}
