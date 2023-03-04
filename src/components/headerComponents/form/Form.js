import "./Form.css";

export default function Form({ activeSearch, onChangeActiveSearch }) {
    return (
        <form className={activeSearch ? "form-none" : ""} action="">
            <input
                className="search__input"
                type="text"
                placeholder="Axtardığınız məlumatı daxil edin - Sizi nə maraqlandırır?"
            />
            <div onClick={() => onChangeActiveSearch()} className="search__close-btn"></div>
        </form>
    );
}
