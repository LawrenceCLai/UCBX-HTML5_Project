$(document).ready(function () {
    //    do some interesting interactions
    console.log("ready!");
    var $btns = $('.btn').click(function () {
        // Do whatever you want done when clicked
        if (this.id == 'all') {
            // do something if all the buttons are clicked
            $('#basket > div').show();
            // show all the baskets
        }
        else {
            // do something if not all the buttons are clicked
            var $el = $('.' + this.id).show();
            $('#basket > div').not($el).hide();
        }

    });
});

// selector
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
