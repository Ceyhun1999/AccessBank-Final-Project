import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter({ currencyListToday }) {
    const [inpV1, setInpV1] = useState(100);
    const [inpV2, setInpV2] = useState(0);
    const [slcV1, setSlcV1] = useState("AZN");
    const [slcV2, setSlcV2] = useState("USD");

    useEffect(() => {
        calcInpV2();
    }, [currencyListToday, inpV1]);

    useEffect(() => {
        calcInpV1();
    }, [inpV2]);

    const calcInpV1 = () => {
      
     
    };

    const calcInpV2 = () => {
        let x = (inpV1 * currencyListToday[slcV1]) / currencyListToday[slcV2];
        setInpV2(x.toFixed(2));
    };

    const onChangeInpV1 = (e) => {
        setInpV1(e.target.value);
    };

    const onChangeInpV2 = (e) => {
        setInpV2(e.target.value);
    };

    const test = () => {};

    return (
        <div className="currency-converter">
            <div className="currency-converter__item">
                <select onChange={test} value={slcV1} className="select select1" name="" id="">
                    <option value="AZN">AZN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="RUB">RUB</option>
                </select>
                <input
                    name="input1"
                    onChange={onChangeInpV1}
                    className="input input1"
                    type="number"
                    value={inpV1}
                />
            </div>
            <div className="currency-converter__controls">
                <div onClick={test} className="currency-converter__arrow"></div>
                <div className="currency-converter__swap"></div>
            </div>
            <div className="currency-converter__item">
                <select onChange={test} value={slcV2} className="select select2" name="" id="">
                    <option value="AZN">AZN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="RUB">RUB</option>
                </select>
                <input
                    name="input2"
                    onChange={onChangeInpV2}
                    className="input input2"
                    type="number"
                    value={inpV2}
                />
            </div>
        </div>
    );
}
