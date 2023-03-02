import { useEffect, useState } from "react";
import CurrecyServices from "../../../services/CurrecyServices";
import CurrencyConverter from "../currencyConverter/CurrencyConverter";
import CurrencyRates from "../currencyRates/CurrencyRates";
import "./CurrencyBlock.css";

export default function CurrencyBlock() {
    const currencyService = new CurrecyServices();

    const [currencyListToday, setCurrencyListToday] = useState({ USD: null, EUR: null, GBP: null, RUB: null });
    const [currencyListYest, setCurrencyListYest] = useState({ USD: null, EUR: null, GBP: null, RUB: null });
    const [activeTable, setActiveTable] = useState(true);
    const [noActiveBtn, setNoActiveBtn] = useState(true);

    const onChangeActiveTable = () => setActiveTable((x) => !x);
    const onChangeActiveBtn = () => setNoActiveBtn((x) => !x);

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
                        <button
                            disabled={noActiveBtn ? false : true}
                            onClick={onChangeActiveBtn}
                            className={!noActiveBtn ? "currency__noActiveBtn" : ""}>
                            Nağd
                        </button>
                        <button
                            disabled={noActiveBtn ? true : false}
                            onClick={onChangeActiveBtn}
                            className={noActiveBtn ? "currency__noActiveBtn" : ""}>
                            Nağdsız
                        </button>
                    </div>
                </div>
                <div className="currency-block__content">
                    <CurrencyRates
                        activeTable={activeTable}
                        currencyListToday={currencyListToday}
                        currencyListYest={currencyListYest}
                        noActiveBtn={noActiveBtn}
                    />
                    <CurrencyConverter
                        currencyListToday={{ ...currencyListToday, AZN: "1" }}
                        onChangeActiveTable={onChangeActiveTable}
                    />
                </div>
            </div>
        </section>
    );
}
