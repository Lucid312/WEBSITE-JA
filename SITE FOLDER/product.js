const productslist = [
    { name: "Silver Bracelet", price: 199.99, qty: 10 },
    { name: "Silver Bracelet", price: 149.99, qty: 15 },
    { name: "Silver Bracelet", price: 229.99, qty: 8 },

    { name: "Halloween Charm", price: 199.99, qty: 8 },
    { name: "Infinity Charm", price: 149.99, qty: 15 },
    { name: "Decarative Charm", price: 229.99, qty: 77 },

    { name: "Sun and Moon Ring", price: 199.99, qty: 55 },
    { name: "Gold Ring", price: 149.99, qty: 99 },
    { name: "Band Of Heart Rings", price: 229.99, qty: 100 },

];

// Store productslist in localStorage
localStorage.setItem("productsList", JSON.stringify(productslist));

// To verify, you can retrieve it back
const storedProducts = JSON.parse(localStorage.getItem("productsList"));
console.log(storedProducts); // Will print the array of products to the console

// Function to add products to localStorage (the cart)
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cart));
}