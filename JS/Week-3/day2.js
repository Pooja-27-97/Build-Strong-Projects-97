// let btns = document.querySelectorAll('button');

// function sayHello() {
//     console.log("Hello World!");
// }

// for(btn of btns) btn.onclick = sayHello;


// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let randomColor = getRandomColor();
//     let h1 = document.querySelector("h1");
//     h1.innerText = randomColor;
    
//     let div = document.querySelector(".box");
//     div.style.backgroundColor = randomColor;
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let input = document.querySelector("input");

// input.addEventListener("keyup", function(event) {
//     console.dir(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key pressed");
// })


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.dir(form.elements);
//     let input = document.querySelector("input");
//     console.dir(input.value);
// })


// let btn = document.createElement("button");
// let body = document.querySelector("body");

// body.append(btn);

// btn.innerHTML = "Click me!";

// btn.addEventListener("mouseenter", function() {
//     btn.style.backgroundColor = "Pink";
// })

let input = document.querySelector("input");
input.addEventListener("input", function() {
    let h2 = document.querySelector("h2");
    let result = "";

    for(let i=0; i < input.value.length; i++) {
        let ch = input.value[i];
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch == " ")) result += ch;
    }
    this.value = result;
    console.log(this.value);
    h2.innerText = result;
})