import "./MyAccess.css";

export default function MyAccess() {
    return (
        <section className="myAccess">
            <div className="myAccess-inner">
                <div className="myAccess__text">
                    <div className="myAccess__title">
                        <b>myAccess</b> - həyatı asanlaşdırır
                    </div>
                    <div className="myAccess__desc">
                        myAccess-lə istənilən növ bank əməliyyatlarınızı daha rahat idarə edin. Zaman və
                        məkandan asılı olmayaraq daima yanınızda!
                    </div>
                    <div className="myAccess__text-decor">
                        <div className="myAccess__logo"></div>
                        <div className="myAccess__line"></div>
                        <div className="myAccess__QR"></div>
                    </div>
                    <button className="myAccess__btn">myAccess tətbiqi</button>
                </div>
                <div className="myAccess__img"></div>
            </div>
        </section>
    );
}
