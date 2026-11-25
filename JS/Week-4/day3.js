let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        console.log(nextColorChange);
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () =>{ 
        changeColor("orchid", 1000);
    });
});