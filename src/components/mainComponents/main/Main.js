import Calculator from "../calculator/Calculator";
import Currency from "../currency/Currency";
import MyAccess from "../myAccess/MyAccess";
import MyCard from "../myCard/MyCard";
import SectionProducts from "../products/Products";
import Slider from "../slider/Slider";

import "./Main.css";

export default function Main() {
    return (
        <main>
            <Slider />
            <SectionProducts />
            <Calculator />
            <MyCard />
            <MyAccess />
            <Currency />
        </main>
    );
}
