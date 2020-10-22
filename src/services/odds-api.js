export function getCurrentOdds() {
    return fetch('https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=f244cc27b9dc153eed9040896094157a')
    .then(res => res.json())
}