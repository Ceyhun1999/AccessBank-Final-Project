import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter({ currencyListToday }) {
    const [inpV1, setInpV1] = useState(100);
    const [inpV2, setInpV2] = useState(0);
    const [slcV1, setSlcV1] = useState("AZN");
    const [slcV2, setSlcV2] = useState("USD");

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        if (flag) {
            calcInpV2();
        } else {
            calcInpV1();
        }
    }, [currencyListToday, inpV1, inpV2, slcV1, slcV2]);

    const calcInpV2 = () => {
        let x = "";
        if (inpV1 !== "") {
            x = (inpV1 * currencyListToday[slcV1]) / currencyListToday[slcV2];
            setInpV2(x.toFixed(2));
        } else {
            x = "";
            setInpV2(x);
        }
    };

    const calcInpV1 = () => {
        let y = "";
        if (inpV2 !== "") {
            y = (inpV2 * currencyListToday[slcV2]) / currencyListToday[slcV1];
            setInpV1(y.toFixed(2));
        } else {
            y = "";
            setInpV1(y);
        }
    };

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
    };

    const test1 = (e) => {
        setSlcV1(e.target.value);
    };

    const test2 = (e) => {
        setSlcV2(e.target.value);
    };

    return (
        <div className="currency-converter">
            <div className="currency-converter__item">
                <select onChange={test1} value={slcV1} className="select select1" name="" id="">
                    <option value="AZN">AZN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="RUB">RUB</option>
                </select>
                <input onChange={onChangeInpV1} className="input" type="number" value={inpV1} />
            </div>
            <div className="currency-converter__controls">
                <div onClick={swap} className="currency-converter__arrow"></div>
                <div className="currency-converter__swap"></div>
            </div>
            <div className="currency-converter__item">
                <select onChange={test2} value={slcV2} className="select select2" name="" id="">
                    <option value="AZN">AZN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="RUB">RUB</option>
                </select>
                <input onChange={onChangeInpV2} className="input" type="number" value={inpV2} />
            </div>
        </div>
    );
}
