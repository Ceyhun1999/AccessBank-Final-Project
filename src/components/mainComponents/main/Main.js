import SectionProducts from "../products/Products";
import Slider from "../slider/Slider";
import Test from "../test/Test";
import "./Main.css";

export default function Main() {
    return (
        <main>
            <Slider />
            <SectionProducts />
            <Test />
        </main>
    );
}
