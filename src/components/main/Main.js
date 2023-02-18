import { useState } from "react";
import "./Main.css";

export default function Main() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <>
            <h2>Scroll Top: {scrollTop}</h2>
            <main>sad</main>
            <div onScroll={handleScroll}></div>
        </>
    );
}
