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

function randomQuote() {
    fetch ("https://api.quotable.io/quotes/random?tags=famous-quotes&maxLength=100&limit=12")
    .then(response => {
            if(!response.ok) {
                console.log("Problem");
                return;
            }
            return response.json();
        })
    .then( data => {
        // console.log (data)
        data.forEach((item, index) => {
            const quoteText = document.querySelector(`#quote${index + 1} .quote-text`);
            const quoteAuthor = document.querySelector(`#quote${index + 1} .quote-author`);
            quoteText.textContent = item.content;
            quoteAuthor.textContent= `-- ${item.author}`;
        });
        
    })
    .catch(error => {
        console.log(error);
    });
}

randomQuote();
