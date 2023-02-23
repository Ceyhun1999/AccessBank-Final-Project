import { useEffect, useState } from "react";

import "./Currency.css";

export default function Currency() {
    const [currencyList, setCurrencyList] = useState({
        USD: null,
        EUR: null,
        GBP: null,
        RUB: null,
    });

    const getCurrencyValue = () => {
        let copy = {
            USD: null,
            EUR: null,
            GBP: null,
            RUB: null,
        };

        Promise.all(
            Object.keys(copy).map((item) => {
                fetch(`https://api.exchangerate.host/convert?from=AZN&to=${item}&date=2022-04-04`)
                    .then((res) => res.json())
                    .then(
                        (data) => {
                            copy[item] = 1;
                        },

                        (error) => {
                            console.log(error);
                        }
                    );
            })
        ).then(() => console.log(copy));

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
                                                <td className="price last-td">1.7025</td>
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
