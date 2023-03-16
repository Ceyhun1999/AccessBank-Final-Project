import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter({ currencyListToday, onChangeActiveTable }) {
    const [inpV1, setInpV1] = useState(100);
    const [inpV2, setInpV2] = useState(0);
    const [slcV1, setSlcV1] = useState("AZN");
    const [slcV2, setSlcV2] = useState("USD");
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        if (flag) calcInpV2();
        else calcInpV1();
    }, [currencyListToday, inpV1, inpV2, slcV1, slcV2]);

    useEffect(() => onChangeActiveTable(slcV1, slcV2), [slcV1, slcV2]);

    const calcInpV2 = () => {
        let x = "";
        if (inpV1 !== "") {
            x = (inpV1 * currencyListToday[slcV1]) / currencyListToday[slcV2];
            slcV1 === slcV2 ? setInpV2(x.toFixed(0)) : setInpV2(x.toFixed(2));
        } else {
            x = "";
            setInpV2(x);
        }
    };

    const calcInpV1 = () => {
        let y = "";
        if (inpV2 !== "") {
            y = (inpV2 * currencyListToday[slcV2]) / currencyListToday[slcV1];
            slcV1 === slcV2 ? setInpV1(y.toFixed(0)) : setInpV1(y.toFixed(2));
        } else {
            y = "";
            setInpV1(y);
        }
    };

    const onChangeSlcV1 = (e) => setSlcV1(e.target.value);
    const onChangeSlcV2 = (e) => setSlcV2(e.target.value);

    const onChangeInpV1 = (e) => {
        setInpV1(e.target.value);
        setFlag(true);
    };

    const onChangeInpV2 = (e) => {
        setInpV2(e.target.value);
        setFlag(false);
    };

    const swap = () => {
        setSlcV1(slcV2);
        setSlcV2(slcV1);
        setInpV1(inpV2);
        setInpV2(inpV1);
        setFlag(false);
    };

    return (
        <div className="currency-converter">
            <div className="currency-converter__item">
                <select onChange={onChangeSlcV1} value={slcV1} className="select select1" name="" id="">
                    {Object.keys(currencyListToday)
                        .reverse()
                        .map((item, idx) => (
                            <option key={idx} value={item}>
                                {item}
                            </option>
                        ))}
                </select>
                <input onChange={onChangeInpV1} min={0} className="input" type="number" value={inpV1} />
            </div>
            <div className="currency-converter__controls">
                <div onClick={swap} className="currency-converter__arrow"></div>
                <div className="currency-converter__swap"></div>
            </div>
            <div className="currency-converter__item">
                <select onChange={onChangeSlcV2} value={slcV2} className="select select2" name="" id="">
                    {Object.keys(currencyListToday)
                        .reverse()
                        .map((item, idx) => (
                            <option key={idx} value={item}>
                                {item}
                            </option>
                        ))}
                </select>
                <input onChange={onChangeInpV2} min={0} className="input" type="number" value={inpV2} />
            </div>
        </div>
    );
}
