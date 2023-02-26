import "./CurrencyRates.css";

export default function CurrencyRates({ currencyListToday, currencyListYest }) {
    return (
        <div className="currency-rates__table">
            <div className="table-inner">
                <table>
                    <tbody>
                        <tr className="thead">
                            <td></td>
                            <td>Alış</td>
                            <td className="last-td">Satış</td>
                        </tr>
                        {Object.keys(currencyListToday).map((item) => {
                            let decor = "stabil";
                            if (+currencyListToday[item] > +currencyListYest[item]) decor = "up";
                            else if (+currencyListToday[item] < +currencyListYest[item]) {
                                decor = "down";
                            }
                            return (
                                <tr key={item}>
                                    <td>{item}</td>
                                    <td className={"price " + decor}>{currencyListToday[item]}</td>
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
    );
}
