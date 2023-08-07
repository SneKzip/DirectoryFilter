const buttons = document.querySelectorAll(".buttons__button");
const cards = document.querySelectorAll(".card");

const filterCards = event => {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    cards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === event.target.dataset.name || event.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

buttons.forEach(button => button.addEventListener("click", filterCards));    