const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const originalText = button.textContent;

        button.textContent = "Selected ✓";

        setTimeout(function() {
            button.textContent = originalText;
        }, 1200);

    });

});