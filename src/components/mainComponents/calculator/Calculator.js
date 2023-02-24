import { useEffect, useState } from "react";
import { calcData } from "../../../data/Data";
import Range from "../range/Range";
import "./Calculator.css";

export default function Calculator() {
    const { defaultT, defaultA, defaultS } = calcData.defaultV;
    const [rangeValue, setValue] = useState({ time: defaultT, amount: defaultA, salary: defaultS });
    const [result, setResult] = useState(0);

    useEffect(() => {
        let percent =
            rangeValue.salary > 3000 && rangeValue.salary < 6000 ? 14 : rangeValue.salary > 6000 ? 12 : 15;
        let resultCopy =
            (((1 + percent / 12 / 100) ** rangeValue.time * (percent / 12 / 100)) /
                ((1 + percent / 12 / 100) ** rangeValue.time - 1)) *
            rangeValue.amount;
        resultCopy = Math.trunc(resultCopy);
        setResult(resultCopy);
    }, [rangeValue]);

    const onChangeValue = (e, name) => {
        if (typeof e.target.value === "string") setValue({ ...rangeValue, [name]: +e.target.value });
        else setValue({ ...rangeValue, [name]: e.target.value });
    };

    return (
        <section className="calculator">
            <div className="container">
                <div className="calculator__inner">
                    <div>
                        <h2 className="calculator__title-item1">Kredit kalkulyatoru</h2>
                        <span className="calculator__btn">İstehlak krediti</span>
                    </div>
                    <div className="calculator__content">
                        <div className="calculator__sliders">
                            {calcData.data.map((item, idx) => {
                                let text = idx === 0 ? " ay" : "";
                                return (
                                    <Range
                                        key={idx}
                                        data={item}
                                        text={text}
                                        onChangeValue={onChangeValue}
                                        rangeValue={rangeValue}
                                    />
                                );
                            })}
                        </div>
                        <div className="calculator__result">
                            <p>Aylıq ödəniş</p>
                            <div className="calculator__result-value">
                                <span>{result}</span>
                                <span></span>
                            </div>
                            <button>Sifariş et</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
