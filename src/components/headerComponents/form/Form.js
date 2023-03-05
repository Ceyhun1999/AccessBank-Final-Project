import { useEffect, useRef } from "react";
import "./Form.css";

export default function Form({ activeSearch, onChangeActiveSearch, activeHeader }) {
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus(), [activeSearch]);

    return (
        <form
            className={
                activeHeader ? (activeSearch ? "form-none form__h-60" : "") : activeSearch ? "form-none" : ""
            }>
            <input
                ref={inputRef}
                type="text"
                className="search__input"
                placeholder="Axtardığınız məlumatı daxil edin - Sizi nə maraqlandırır?"
            />
            <div onClick={() => onChangeActiveSearch()} className="search__close-btn"></div>
        </form>
    );
}
