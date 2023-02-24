import { productData } from "../../../data/Data";
import "./Products.css";

export default function SectionProducts() {
    return (
        <section className="products">
            <div className="container">
                <div className="products__content">
                    <h2 className="products__title">{productData.data.title}</h2>
                    <div className="product__cards">
                        {productData.data.cardsInfo.map((item, idx) => (
                            <div key={idx} className="product-card">
                                <div
                                    style={{
                                        background: `url('./assets/img/mainImg/productsImg/product${
                                            idx + 1
                                        }.jpg') center/cover`,
                                    }}
                                    className="product-img"></div>
                                <h4 className="product-title">{item.cardTitle}</h4>
                                <p className="product-desc">{item.cardDesc}</p>
                                <span className="product-link">{item.cardLink}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
