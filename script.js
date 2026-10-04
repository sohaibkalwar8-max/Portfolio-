/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================
   IMAGE LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `
            <div class="lightbox-content">
                <button class="close-lightbox">✕</button>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;

        document.body.appendChild(overlay);

        document.body.style.overflow = "hidden";

        const closeButton = overlay.querySelector(".close-lightbox");

        closeButton.addEventListener("click", closeLightbox);

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            overlay.remove();
            document.body.style.overflow = "";
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .gallery-item, .info-item"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});