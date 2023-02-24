export default class CurrecyServices {
    getData = (copy, date) => {
        return Promise.all(
            Object.keys(copy).map((item) => {
                return fetch(`https://api.exchangerate.host/convert?from=${item}&to=AZN&date=${date}`)
                    .then((res) => res.json())
                    .then((data) => data.result.toFixed(4));
            })
        );
    };
}
