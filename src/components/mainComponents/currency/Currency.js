import { useEffect, useState } from "react";
import "./Currency.css";

export default function Currency() {
    const [currencyList, setCurrencyList] = useState({ USD: null, EUR: null, GBP: null, RUB: null });

    const getCurrencyValue = () => {
        let copy = { ...currencyList };
        Promise.all(
            Object.keys(copy).map((item) => {
                return fetch(`https://api.exchangerate.host/convert?from=${item}&to=AZN`)
                    .then((res) => res.json())
                    .then((data) => (copy[item] = data.result.toFixed(4)));
            })
        ).then(() =>  setCurrencyList(copy));
    };

    useEffect(() => {
        getCurrencyValue();
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
                                    {Object.keys(currencyList).map((item, idx) => {
                                        return (
                                            <tr key={item}>
                                                <td>{item}</td>
                                                <td className="price">{currencyList[item]}</td>
                                                <td className="price last-td">
                                                    {(item === "RUB"
                                                        ? +currencyList[item] + 0.001
                                                        : +currencyList[item] + 0.01
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
