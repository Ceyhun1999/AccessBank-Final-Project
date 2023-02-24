import { Slider } from "@mui/material";
import { useState } from "react";
import "./Range.css";

export default function Range({ data, text, onChangeValue, rangeValue }) {
    const { rangName, min, max, rangText } = data;
    const [valInput, setValInput] = useState(rangeValue[rangName]);
    const [active, setActive] = useState(false);
    const [flag, setFlag] = useState(true);

    const defaultChangeActiveClass = () => {
        setTimeout(() => {
            setActive(false);
            setFlag(true);
        }, 1000);
    };

    const changeActiveClass = () => {
        if (flag) {
            setFlag(false);
            setActive(true);
            defaultChangeActiveClass();
        }
    };

    const testFunc = (e) => {
        if (e.target.tagName === "INPUT") {
            if (e.key === "Enter") {
                e.preventDefault();
                if (e.target.value <= max && e.target.value >= min) {
                    onChangeValue(e, rangName);
                    setValInput(e.target.value);
                } else if (e.target.value < min) {
                    e.target.value = min;
                    onChangeValue(e, rangName);
                    setValInput(e.target.value);
                    changeActiveClass();
                } else if (e.target.value > max) {
                    e.target.value = max;
                    onChangeValue(e, rangName);
                    setValInput(e.target.value);
                    changeActiveClass();
                }
            }
        } else onChangeValue(e, rangName);
        setValInput(e.target.value);
    };

    return (
        <div className="range-block">
            <div className="range-block__item1">
                <span className="range-name">{rangText}</span>
                <div className="range-value">
                    <input
                        onChange={(e) => testFunc(e)}
                        onKeyDown={(e) => testFunc(e)}
                        className={active ? "range-input highlight" : "range-input"}
                        min={min}
                        max={max}
                        type="number"
                        name={rangName}
                        value={valInput}
                    />
                    <span className={!text ? "azn" : ""}>{text}</span>
                </div>
            </div>
            <Slider
                className="range-block__item2"
                onChange={(e) => testFunc(e)}
                color="primary"
                min={min}
                max={max}
                value={rangeValue[rangName]}
                aria-label="Default"
            />
            <div className="range-block__item3">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
}
