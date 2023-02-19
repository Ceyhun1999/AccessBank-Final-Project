import { Slider } from "@mui/material";
import { useState } from "react";
import "./Range.css";

export default function Range({ data, defaultTxt, onChangeAmount, val }) {
    return (
        <div className="range-block">
            <div className="range-block__item1">
                <span className="range-name">{data.rangName}</span>
                <div className="range-value">
                    <input name={data.rangName} value={val[data.rangName] ? val[data.rangName] : data.defaultV} />
                    <span className={!defaultTxt ? "azn" : ""}>{defaultTxt}</span>
                </div>
            </div>
            <Slider
                className="range-block__item2"
                onChange={(e) => onChangeAmount(e, data.rangName)}
                color="primary"
                min={data.min}
                max={data.max}
                defaultValue={data.defaultV}
                aria-label="Default"
            />
            <div className="range-block__item3">
                <span>{data.min}</span>
                <span>{data.max}</span>
            </div>
        </div>
    );
}
