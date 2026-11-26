let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("Color: red");
    return changeColor("orchid", 1000);
})
.then(() => {
    console.log("Color: orchid");
    return changeColor("aqua", 1000);
})
.then(() => {
    console.log("Color: aqua");
})
.catch(() => {
    console.log("No changes");
})


// function saveToDB(data, success, failure) {
//     let networkSpeed = Math.floor(Math.random() * 10) + 1;
//     if(networkSpeed > 5) success();
//     else failure();
// }

// saveToDB("Dreams", () => {
//     console.log("Data successfully saved!");
// }, () => {
//     console.log("Weak connection, data not saved!");
// })

// function saveToDB(data) {
//     return new Promise ((resolve, reject) => {
//         let networkSpeed = Math.floor(Math.random() * 10) + 1;
//         if(networkSpeed > 5) resolve("Data successfully saved!");
//         else reject("Weak connection, data not saved!");
//     })
// }

// saveToDB("Desire")
// .then((req) => {
//     console.log("Data-1 saved");
//     console.log(req); 
//     return saveToDB("Passion");
// })
// .then((req) => {
//         console.log("Data-2 saved");
//         console.log(req);
//         return saveToDB("Goal");
//     })
// .then((req) => {
//         console.log("Data-3 saved");
//         console.log(req);
//     })
// .catch((err) => {
//     console.log(err);
//     console.log("Promise rejected");
// })