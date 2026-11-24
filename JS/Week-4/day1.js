// let div = document.querySelector(".flowers");
// let ul = document.querySelector("ul");
// let lst = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("div clicked");
// });

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul clicked");
// });

// for(lt of lst) {
//     lt.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li clicked");
//     })
// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let input = document.querySelector("input");
    let li = document.createElement("li");
    li.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Remove task";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
    ul.append(li);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    }
})