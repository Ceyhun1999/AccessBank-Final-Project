import { useEffect, useState } from "react";
import "./CurrencyRates.css";

export default function CurrencyRates({ currencyListToday, currencyListYest, activeTable, noActiveBtn }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        let data = new Date().toISOString().split("T")[0].split("-");
        let newData = data[2] + "." + data[1] + "." + data[0];
        setData(newData);
    }, []);

    return (
        <div className="currency-rates__table">
            <div className="table-inner">
                <table>
                    <tbody>
                        <tr className="thead">
                            <td></td>
                            <td className={!activeTable ? "noActiveTable" : ""}>Alış</td>
                            <td className={activeTable ? "last-td" + " activeTable" : "last-td"}>Satış</td>
                        </tr>
                        {Object.keys(currencyListToday).map((item, idx) => {
                            let decor = "stabil";
                            if (+currencyListToday[item] > +currencyListYest[item]) decor = "up";
                            else if (+currencyListToday[item] < +currencyListYest[item]) {
                                decor = "down";
                            }
                            return (
                                <tr
                                    className={(idx === 2 || idx === 3) && !noActiveBtn ? "dispN" : ""}
                                    key={item}>
                                    <td>{item}</td>
                                    <td
                                        className={
                                            !activeTable
                                                ? "price " + decor + " noActiveTable"
                                                : "price " + decor
                                        }>
                                        {currencyListToday[item]}
                                    </td>
                                    <td
                                        className={
                                            activeTable
                                                ? "price last-td " + decor + " activeTable"
                                                : "price last-td " + decor
                                        }>
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
            <p className="data">Yenilənib: {data}</p>
        </div>
    );
}
