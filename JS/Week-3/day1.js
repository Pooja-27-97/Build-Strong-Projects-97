let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click Me!";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

input.setAttribute('placeholder', "Username");
btn.setAttribute("id", "btn");

document.querySelector('button').style.color = "White";
document.querySelector('#btn').style.backgroundColor = "Blue";

let h1 = document.createElement('h1');
h1.innerHTML = `<u>DOM Practice</u>`;
h1.style.color = "purple";
document.querySelector('body').append(h1);

let p = document.createElement('p');
p.innerHTML = "<b>Knowledge</b> and <b>action</b> are two wings";
document.querySelector('body').append(p);
