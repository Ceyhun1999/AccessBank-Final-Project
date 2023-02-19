import Calculator from "../calculator/Calculator";
import SectionProducts from "../products/Products";
import Slider from "../slider/Slider";
import "./Main.css";

export default function Main() {
    return (
        <main>
            <Slider />
            <SectionProducts />
            <Calculator />
        </main>
    );
}
