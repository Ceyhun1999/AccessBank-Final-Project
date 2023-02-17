import DropDowns from "../dropDowns/DropDowns";
import "./NavLeft.css";

const objData = {
    data: [
        {
            link: "KREDİTLƏR",
            drop: [
                {
                    span: "Nağd kredit",
                    p: "Təcili pul lazımdırsa, nağd pul kreditimiz köməyinizə gələcək!",
                },
                {
                    span: "Kredit kartı",
                    p: "Etdiyiniz hər ödənişə 50 günlük güzəşt müddəti əldə edin",
                },
                {
                    span: "Təminatlı kredit",
                    p: "Daşınmaz əmlak təminatı ilə daha çox kredit məbləği eldə edin",
                },
                {
                    span: "Kredit kartı sifarişi",
                    p: "Kredit kartını elə indi sifariş edin, ödənişsiz çatdıraq",
                },
                {
                    span: "Kredit sifarişi",
                    p: "Krediti elə indi, onlayn sifariş edin!",
                },
            ],
            dropImg: {
                dropImgSrc: "./assets/img/headerImg/myCardStandardSmall.png",
                dropImgDesc1: "Kredit kartı - 10 000-dək",
                dropImgDesc2: "Etdiyiniz hər ödənişə 50 günlük güzəşt müddəti əldə edin",
                dropImgName: "Kredit kartı",
            },
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
            dropImg: {
                dropImgSrc: "./assets/img/headerImg/myCardLuxSmall.png",
                dropImgDesc1: "myCard Lux",
                dropImgDesc2: "Rahatlığınıza zəmanət verən kart. Yüksək statusa hər şey daxildir",
                dropImgName: "Debet kartı",
            },
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
            dropImg: {
                dropImgSrc: "./assets/img/headerImg/InstantAccessDepositSmall.jpg",
                dropImgDesc1: "Pulunuz pul gətirsin!",
                dropImgDesc2: " ",
                dropImgName: "Əlverişli əmanət",
            },
        },
        {
            link: "ONLAYN XİDMƏTLƏR",
            drop: [
                {
                    span: "Kredit sifarişi",
                    p: "Krediti elə indi, onlayn sifariş edin!",
                },
                {
                    span: "Kart sifarişi",
                    p: "Onlayn sifariş edin, ünvanınıza qədər pulsuz çatdıraq!",
                },
                {
                    span: "Depozit sifarişi",
                    p: "Vaxtınız əmanətiniz qədər dəyərlidir! İndi sifariş edin, vaxtınıza dəyər qatın",
                },
                {
                    span: "Kredit kartı sifarişi",
                    p: "Kredit kartını elə indi sifariş edin, ödənişsiz çatdıraq",
                },
                {
                    span: "Onlayn növbə",
                    p: "Onlayn növbə - vaxt itirmədən xidmətinizdə! Növbənizi onlayn götürün və vaxtınıza qənaət edin",
                },
                {
                    span: "Onlayn kredit ödənişi",
                    p: " ",
                },
            ],
        },
        {
            link: "DİGƏR XİDMƏTLƏR",
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
    ],
};

export default function NavLeft() {
    return (
        <div className="nav__left">
            <a className="nav__logo">
                <div className="nav__logo-inner"></div>
            </a>
            {objData.data.map((item, idx) => {
                let test = "";
                if (idx === 3) test = "testing";
                else if (idx === 4) test = "testing2";
                return (
                    <div key={item.link} className="nav__left-link nav__left-link-hover">
                        <a className={test}>{item.link}</a>
                        <DropDowns>{item}</DropDowns>
                    </div>
                );
            })}
        </div>
    );
}

export { objData };
