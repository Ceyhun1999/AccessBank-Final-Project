import Calculator from "../calculator/Calculator";
import CurrencyBlock from "../currencyBlock/CurrencyBlock";
import MyAccess from "../myAccess/MyAccess";
import MyCard from "../myCard/MyCard";
import News from "../news/News";

import SectionProducts from "../products/Products";
import Slider from "../slider/Slider";

export default function Main() {
    return (
        <main>
            <Slider />
            <SectionProducts />
            <Calculator />
            <MyCard />
            <MyAccess />
            <CurrencyBlock />
            <News />
        </main>
    );
}
