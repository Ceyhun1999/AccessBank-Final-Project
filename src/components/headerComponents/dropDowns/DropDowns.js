import "./DropDowns.css";

export default function DropDowns(props) {
    console.log(props.children);
    return (
        <div className="drop">
            <div className="drop__content">
                <ul>
                    {props.children.map((item) => (
                        <li>
                            <span>{item.span}</span>
                            <p>{item.p}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
