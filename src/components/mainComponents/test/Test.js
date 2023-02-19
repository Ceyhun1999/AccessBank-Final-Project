import { Slider } from "@mui/material";
import "./Test.css";

export default function Test() {
    const onChangeAmount = (e) => {
        console.log(e.target.value);
    };

    console.log();

    return (
        <div className="test">
            <div className="cont">
                <Slider
                    onChange={onChangeAmount}
                    color="primary"
                    min={500}
                    max={40000}
                    defaultValue={20000}
                    aria-label="Default"
                />
            </div>
        </div>
    );
}
