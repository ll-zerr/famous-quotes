const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

checkBoxes ();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

fetch ("https://api.quotable.io/random?tags=famous-quotes")
    .then(response => response.json())
    .then( data => {
        console.log (data)
})
    
    