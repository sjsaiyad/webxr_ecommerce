// Get the product entity
const product = document.querySelector("#product1");

// Add a click listener
product.addEventListener("click", () => {
    alert("You selected the product!");
});

product.addEventListener("mouseenter", () => {
    product.setAttribute("material", "color", "yellow");
});

product.addEventListener("mouseleave", () => {
    product.setAttribute("material", "color", "white");
});
// Add to Cart option
const cart = [];

document.querySelectorAll("a-entity").forEach((product) => {
    product.addEventListener("click", () => {
        const productId = product.getAttribute("id");
        cart.push(productId);
        alert(`${productId} added to cart!`);
    });
});

// show cart contents

console.log("Cart contents:", cart);

// Updated UI

document.querySelector("#menu").addEventListener("click", (e) => {
    const item = e.target.getAttribute("value");
    if (item === "Cart") {
        alert("Viewing cart...");
    } else if (item === "Checkout") {
        alert("Proceeding to checkout...");
    }
});

document.querySelector("#menu-home").addEventListener("click", () => {
    alert("Returning to Home Page...");
    // Add logic to navigate to the Home page
});

document.querySelector("#menu-cart").addEventListener("click", () => {
    alert("Opening Cart...");
    // Add logic to view the cart
});

document.querySelector("#menu-checkout").addEventListener("click", () => {
    alert("Proceeding to Checkout...");
    // Add logic to start checkout process
});

const menuItems = ["menu-home", "menu-cart", "menu-checkout"];

menuItems.forEach((id) => {
    const item = document.querySelector(`#${id}`);

    // Highlight when pointing at the menu item
    item.addEventListener("mouseenter", () => {
        item.setAttribute("color", "red"); // Changes text to red
    });

    // Remove highlight when no longer pointing
    item.addEventListener("mouseleave", () => {
        item.setAttribute("color", "black"); // Changes text back to black
    });
});

let currentIndex = 1; // Start with the second product (index 1)
const products = [
    { id: "#product-1", position: "-2 0 0", scale: "0.5 0.5 0.5" },
    { id: "#product-2", position: "0 0 -0.5", scale: "0.7 0.7 0.7" },
    { id: "#product-3", position: "2 0 0", scale: "0.5 0.5 0.5" },
];

function updateCarousel() {
    products.forEach((product, i) => {
        const entity = document.querySelector(product.id);
        const offset = i - currentIndex;

        // Position based on distance from the center
        const newPos = `${offset * 2} 0 ${offset === 0 ? -0.5 : 0}`;
        const newScale = offset === 0 ? "0.7 0.7 0.7" : "0.5 0.5 0.5";

        entity.setAttribute("position", newPos);
        entity.setAttribute("scale", newScale);
    });
}

document.querySelector("#scroll-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateCarousel();
});

document.querySelector("#scroll-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();
