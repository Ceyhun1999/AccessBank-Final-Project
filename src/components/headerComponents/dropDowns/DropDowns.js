import "./DropDowns.css";

export default function DropDowns(props) {
    const { drop, dropImg } = props.children;

    return (
        <div className="drop">
            <div className="drop__content">
                <ul className="drop__content-left">
                    {drop.map((item) => (
                        <li>
                            <span>{item.span}</span>
                            <p>{item.p}</p>
                        </li>
                    ))}
                </ul>
                {dropImg ? (
                    <div className="drop__content-right">
                        <img src={dropImg.dropImgSrc} alt="" />
                        <p>
                            {dropImg.dropImgDesc1}
                            <br />
                            {dropImg.dropImgDesc2}
                        </p>
                        <div>
                            <span>{dropImg.dropImgName}</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
