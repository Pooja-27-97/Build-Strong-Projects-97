// let btns = document.querySelectorAll('button');

// function sayHello() {
//     console.log("Hello World!");
// }

// for(btn of btns) btn.onclick = sayHello;


let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let randomColor = getRandomColor();
    let h1 = document.querySelector("h1");
    h1.innerText = randomColor;
    
    let div = document.querySelector(".box");
    div.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}