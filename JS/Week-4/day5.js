// let url = "https://www.boredapi.com/api/activity";
// // fetch(url)
// // .then((res) => {
// //     console.log(res);
// //     return res.json();
// // })
// // .then((data) => {
// //     console.log(data.activity);
// // })
// // .catch((err) => {
// //     console.log(err);
// // })


// async function getActivity() {
//     let res = await fetch(url);
//     let data = res.json();
//     console.log(data.activity);
// }


// let url = "https://www.boredapi.com/api/activity";

// async function getActivity() {
//     try {
//         let res = await axios.get(url);
//         return res.data.activity;
//     } catch (err) {
//         return "Not found"
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let para = document.querySelector("#idea");
//     para.innerHTML = await getActivity();
// })


// let url = "https://icanhazdadjoke.com/";

// async function  getJokes() {
//     try {
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         return res.data.joke;
//     } catch (err) {
//         return "NOt found";
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let para = document.querySelector("#idea");
//     para.innerHTML = await getJokes();
// })


let url = "http://universities.hipolabs.com/search?name=";

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (err) {
        return "Not found";
    }
}

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let input = document.querySelector("input");
    let country = input.value;
    let list = await getColleges(country);
    show(list);
})

function show(list) {
    let ul = document.querySelector("#list");
    for(let lst of list) {
        let li = document.createElement("li");
        li.innerText = lst.name;
        ul.append(li);
    }
}