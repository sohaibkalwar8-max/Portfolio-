document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const oldText = button.textContent;

            button.textContent = "Selected ✓";

            setTimeout(function () {
                button.textContent = oldText;
            }, 1200);

        });

    });

});