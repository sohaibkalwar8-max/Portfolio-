/* EXPAND CARD */

const expandButton = document.querySelector(".expand-btn");
const expandCard = document.querySelector(".expand-card");

expandButton.addEventListener("click", function () {

    expandCard.classList.toggle("open");

});


/* ACTION CARD */

const actionButton = document.querySelector(".action-btn");
const actionMessage = document.querySelector(".action-message");

actionButton.addEventListener("click", function () {

    actionMessage.textContent = "Action completed successfully ✓";

});


/* LIKE CARD */

const likeButton = document.querySelector(".like-btn");
const likeCount = likeButton.querySelector("span");

let likes = 0;

likeButton.addEventListener("click", function () {

    if (likes === 0) {

        likes = 1;
        likeButton.classList.add("liked");
        likeButton.innerHTML = "♥ Liked <span>1</span>";

    } else {

        likes = 0;
        likeButton.classList.remove("liked");
        likeButton.innerHTML = "♡ Like <span>0</span>";

    }

});


/* TOGGLE CARD */

const toggleButton = document.querySelector(".toggle-btn");
const toggleCard = document.querySelector(".toggle-card");
const toggleStatus = document.querySelector(".toggle-status");

toggleButton.addEventListener("click", function () {

    toggleCard.classList.toggle("active");

    if (toggleCard.classList.contains("active")) {

        toggleStatus.textContent = "Dark mode is currently on.";

    } else {

        toggleStatus.textContent = "Dark mode is currently off.";

    }

});