document.addEventListener("DOMContentLoaded", function () {

    const interfaceBoxes = document.querySelectorAll(".interface-box");

    interfaceBoxes.forEach(function (box) {

        box.addEventListener("click", function () {

            interfaceBoxes.forEach(function (item) {
                item.classList.remove("selected");
            });

            box.classList.add("selected");

        });

    });

});