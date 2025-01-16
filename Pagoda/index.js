// // Bekend ulash 
// // fetch

// let list = document.querySelector(".list")

// async function BekendUlash() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let posts = await response.json()

//     for( let i = 0; i<posts.length; i++ ) {
//         let card = document.createElement("div")
//         card.innerHTML = `
//             <h2>${posts[i].title}</h2>
//             <p>${posts[i].body}</p>
//         `

//         list.append(card)
//     }
// }

// BekendUlash()

// // async bu asinxron funksiya degani






let form = document.querySelector("form")
let input = document.querySelector("input")
let div = document.querySelector(".city")
form.addEventListener("submit", Weather)

async function Weather(event) {
    event.preventDefault()
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=7e69414855f7bf775e23d140ef362321`)
    let city = await response.json()
    div.classList.add("city-active")
    console.log(city);

    div.innerHTML = `
        <div class="cardlist">
        <h2 class="h2">${city.name}</h2>
        <h1 class="h1">${city.sys.country}</h1>
        </div>
        <h3 class="h3">${(city.main.temp - 273.15).toFixed(2)} C</h3>
        <p>OVERCAST CLOUD</p>
    `

}




