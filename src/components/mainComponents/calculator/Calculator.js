import { useEffect, useState } from "react";
import { calcData } from "../../../data/Data";
import Range from "../range/Range";
import "./Calculator.css";

export default function Calculator() {
    const [val, setVal] = useState({
        Müddət: null,
        Məbləğ: null,
        Maaş: null,
    });

    useEffect(() => {}, [val]);

    const onChangeAmount = (e, name) => {
        setVal({
            ...val,
            [name]: e.target.value,
        });
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
                                let defaultTxt = idx === 0 ? " ay" : "";
                                return (
                                    <Range
                                        key={idx}
                                        data={item}
                                        defaultTxt={defaultTxt}
                                        onChangeAmount={onChangeAmount}
                                        val={val}
                                    />
                                );
                            })}
                        </div>
                        <div className="calculator__result">
                            <p>Aylıq ödəniş</p>
                            <div className="calculator__result-value">
                                <span>609</span>
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
