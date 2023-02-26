import { useEffect, useState } from "react";
import CurrecyServices from "../../../services/CurrecyServices";
import CurrencyConverter from "../currencyConverter/CurrencyConverter";
import CurrencyRates from "../currencyRates/CurrencyRates";
import "./CurrencyBlock.css";

export default function CurrencyBlock() {
    const [currencyListToday, setCurrencyListToday] = useState({
        USD: null,
        EUR: null,
        GBP: null,
        RUB: null,
    });
    const [currencyListYest, setCurrencyListYest] = useState({ USD: null, EUR: null, GBP: null, RUB: null });

    const currencyService = new CurrecyServices();

    const getCurrencyValueToday = async () => {
        let copy = { ...currencyListToday };
        let data = [];
        let date = new Date().toISOString().split("T")[0];
        await currencyService.getData(copy, date).then((res) => (data = res));
        Object.keys(copy).map((item, idx) => (copy[item] = data[idx]));
        setCurrencyListToday(copy);
    };

    const getCurrencyValueYest = async () => {
        let copy = { ...currencyListYest };
        let data = [];
        let date = new Date();
        date.setDate(new Date().getDate() - 1);
        date = date.toISOString().split("T")[0];
        await currencyService.getData(copy, date).then((res) => (data = res));
        Object.keys(copy).map((item, idx) => (copy[item] = data[idx]));
        setCurrencyListYest(copy);
    };

    useEffect(() => {
        getCurrencyValueToday();
        getCurrencyValueYest();
    }, []);

    return (
        <section className="currency-block">
            <div className="currency-block__inner">
                <div className="currency-block__top">
                    <div className="currency-block__title">Valyuta kursları</div>
                    <div className="currency-block__btns">
                        <button>Nağd</button>
                        <button className="currency__activeBtn">Nağdsız</button>
                    </div>
                </div>
                <div className="currency-block__content">
                    <CurrencyRates
                        currencyListToday={currencyListToday}
                        currencyListYest={currencyListYest}
                    />
                    <CurrencyConverter currencyListToday={{ ...currencyListToday, AZN: "1" }} />
                </div>
            </div>
        </section>
    );
}
