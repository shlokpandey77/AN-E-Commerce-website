// ---------------- PRODUCT DETAIL SLIDE PANEL ---------------- //

function showDetails(btn) {
    const panel = document.getElementById("productDetails");

    // Fill panel with selected product data
    document.getElementById("detailName").innerText = btn.dataset.name;
    document.getElementById("detailPrice").innerText = "Price: " + btn.dataset.price;
    document.getElementById("detailScore").innerText = "Eco Rating: " + btn.dataset.score;
    document.getElementById("detailImg").src = btn.dataset.img;

    // Opens slide panel
    panel.style.right = "0";
}

function closeDetails() {
    document.getElementById("productDetails").style.right = "-100%";
}


// ---------------- BUY NOW NOTIFICATION ---------------- //

function showNotification() {
    const box = document.getElementById("notifyBox");

    box.classList.add("show");

    // Auto-hide after 3 sec
    setTimeout(() => {
        box.classList.remove("show");
    }, 3000);
}

// Apply notification trigger to all Buy Now buttons once DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".buy-btn").forEach(btn => {
        btn.addEventListener("click", showNotification);
    });
});


// ---------------- NAVBAR ACTIVE STATE ---------------- //

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});