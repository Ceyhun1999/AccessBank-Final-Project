import DropDowns from "../dropDowns/DropDowns";
import "./NavLeft.css";

const obj = {
    data: [
        {
            link: "KREDİTLƏR",
            drop: [
                {
                    span: "AccessQazanc",
                    p: "AccessBank-dan olan kartlarınızla xərclədikcə qazanacaqsız",
                },
                {
                    span: "Pul köçürmələri",
                    p: "Yaxınlarınıza bir addım qədər daha yaxın olun!",
                },
                {
                    span: "Depozit qutuları",
                    p: "Dəyərli əşyalarınızı bizə etibar edin!",
                },
                {
                    span: "Kommunal ödənişlər",
                    p: "Kommunal və digər ödənişləri asan və rahat ödəyin",
                },
            ],
        },
        {
            link: "DEPOZİTLƏR",
            drop: [
                {
                    span: "Müddətli depozit",
                    p: "Kənarda yığılmış pulunuz varsa, əlavə gəliriniz də olsun!",
                },
                {
                    span: "myGoal (Hədəfim) depoziti",
                    p: "Kiçik yatırımlarla böyük məqsədlərə nail olun!",
                },
                {
                    span: "Əlverişli depozit",
                    p: "Pulunuz pul gətirsin!",
                },
                {
                    span: "Depoziti onlayn sifariş et",
                    p: "Banka gəlmədən depoziti onlayn sifariş et",
                },
            ],
        },
        {
            link: "KARTLAR",
            drop: [
                {
                    span: "myCard Standard",
                    p: "Sizin, ailənizin və biznesinizin seçimi. Cibiniz deyil, kartınız dolu olsun",
                },
                {
                    span: "myCard Premium",
                    p: "Premium üstünlüklər dünyasına xoş gəlmisiniz",
                },
                {
                    span: "myCard Lux",
                    p: "Rahatlığınıza zəmanət verən kart. Yüksək statusa hər şey daxildir",
                },
                {
                    span: "myCard Junior",
                    p: "Kiçiklərin böyük dostu. Övladınızın arzularını gerçəkləşdirin",
                },
                {
                    span: "Kartınızı onlayn sifariş edin",
                    p: "Premial üstünlüklərə malik myCard - ı elə indi sifariş edin",
                },
                {
                    span: "Tariflər",
                    p: "Plastik kartlar üzrə tarif cədvəli",
                },
                {
                    span: "AccessQazanc",
                    p: "AccessBank-dan olan kartlarınızla xərclədikcə qazanacaqsız",
                },
            ],
        },
    ],
};

export default function NavLeft() {
    return (
        <div className="nav__left">
            <a className="nav__logo"></a>
            {obj.data.map((item) => (
                <div key={item.link} className="nav__left-link">
                    <a>{item.link}</a>
                    <DropDowns>{item.drop}</DropDowns>
                </div>
            ))}
        </div>
    );
}
