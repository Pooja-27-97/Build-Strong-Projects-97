// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(Math.floor(Math.random() * 10) + 1);
//             resolve("Some random number");
//         }, 1000);
//     })
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// demo();



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let randNum = Math.floor(Math.random() * 10) + 1;
        if(randNum < 5) reject("Promise rejected");
        else {
            setTimeout(() => {
                h1.style.color = color;
                console.log(`${color}: changed`);
                resolve("Color changed");
            }, delay);
        }
    });
}

async function demo() {
    let colors = ["red", "orchid", "aqua", "orange"];

    for(let color of colors) {
        try {
            await changeColor(color, 1000);
        } catch (err) {
            console.log(err);
        }
    }
}