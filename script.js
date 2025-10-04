let url = "https://v6.exchangerate-api.com/v6/24196fef9f8fbb56509ff884/latest/USD";
let rates;
let btn = document.querySelector("#button");
let from_dropDown = document.querySelector("#from_dropDown");
let to_dropDown = document.querySelector("#to_dropDown");
let displayText = document.querySelector("#displayText");
let user_num;
let fromCurr;
let toCurr;
let fromCurrRate;
let toCurrRate;


let change = () => {
let arrKeys = Object.keys(rates);
    arrKeys.forEach((key) => {
        let opt = document.createElement("option");
        let opt2 = document.createElement("option");
        opt.innerText = key;
        opt2.innerText = key;
        from_dropDown.add(opt);
        to_dropDown.add(opt2);
    })
}

(async () => {
    let response = await fetch(url);
     let data = await response.json();
     rates = data.conversion_rates;
    change();
})()

let getCurrRate = () => {
    fromCurrRate = rates[fromCurr];
    toCurrRate = rates[toCurr];
}

let convertCurr = () => {
    return (toCurrRate/fromCurrRate)*user_num;
}

btn.addEventListener("click", () => {
    user_num = document.querySelector("#user_value").value;
    fromCurr = from_dropDown.value;
    toCurr = to_dropDown.value;
    getCurrRate();
    let new_value = convertCurr().toFixed(2);
    displayText.innerText = `${user_num} ${fromCurr} = ${new_value} ${toCurr}`;
})