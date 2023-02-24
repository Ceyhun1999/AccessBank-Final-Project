import { useEffect, useState } from "react";
import "./Currency.css";
import CurrecyServices from "../../../services/CurrecyServices";

export default function Currency() {
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
        <section className="currency">
            <div className="currency-inner">
                <div className="currency__top">
                    <div className="currency__title">Valyuta kursları</div>
                    <div className="currency__top-btns">
                        <button>Nağd</button>
                        <button className="currency__activeBtn">Nağdsız</button>
                    </div>
                </div>
                <div className="currency__content">
                    <div className="currency__table">
                        <div className="currency__table-inner">
                            <table>
                                <tbody>
                                    <tr className="thead">
                                        <td></td>
                                        <td>Alış</td>
                                        <td className="last-td">Satış</td>
                                    </tr>
                                    {Object.keys(currencyListToday).map((item, idx) => {
                                        let decor = "stabil";
                                        if (+currencyListToday[item] > +currencyListYest[item]) decor = "up";
                                        else if (+currencyListToday[item] < +currencyListYest[item]) {
                                            decor = "down";
                                        }

                                        return (
                                            <tr key={item}>
                                                <td>{item}</td>
                                                <td className={"price " + decor}>
                                                    {currencyListToday[item]}
                                                </td>
                                                <td className={"price last-td " + decor}>
                                                    {(item === "RUB"
                                                        ? +currencyListToday[item] + 0.001
                                                        : +currencyListToday[item] + 0.01
                                                    ).toFixed(4)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <p>Yenilənib: 21.02.2023</p>
                    </div>
                    <div className="currency__converter"></div>
                </div>
            </div>
        </section>
    );
}
