import "./MyCard.css";

export default function MyCard() {
    return (
        <section className="myCard">
            <div className="container">
                <div className="myCard__inner">
                    <div className="myCard__img"></div>
                    <div className="myCard__text">
                        <h2 className="myCard__title">myCard Junior kartı</h2>
                        <p className="myCard__desc">
                            Kiçiklərin böyük dostu. Övladınızın arzularını gerçəkləşdirin.
                        </p>
                        <button className="myCard__btn">Bütün kartlar</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
