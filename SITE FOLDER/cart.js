function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let totalPrice = 0;
        cart.forEach((item) => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>`;
            totalPrice += item.price;
        });
        document.getElementById("total-price").innerText = `Total: $${totalPrice.toFixed(2)}`;
    }
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
    document.getElementById("total-price").innerText = "Total: $0.00";
    alert("Order has been cancelled.");
}

function exitCheckout() {
    window.location.href = "product.html";  // Redirects to the product page
}

// Function to generate an invoice
function generateInvoice() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Invoice details
    let invoiceID = Math.floor(Math.random() * 1000000); // Random ID
    let date = new Date().toLocaleDateString();
    let subtotal = 0;
    let taxRate = 0.10; // 10% tax rate
    let discountRate = 0.05; // 5% discount

    let invoiceContent = `
        <h2>Invoice</h2>
        <p>Invoice ID: ${invoiceID}</p>
        <p>Date: ${date}</p>
        <h3>Items:</h3>
    `;

    // Calculate subtotal
    cart.forEach(item => {
        subtotal += item.price;
        invoiceContent += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    });

    // Tax and discount calculations
    let taxAmount = subtotal * taxRate;
    let discountAmount = subtotal * discountRate;
    let total = subtotal + taxAmount - discountAmount;

    // Adding totals to invoice
    invoiceContent += `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (10%): $${taxAmount.toFixed(2)}</p>
        <p>Discount (5%): -$${discountAmount.toFixed(2)}</p>
        <h3>Total: $${total.toFixed(2)}</h3>
    `;

    // Display the invoice in the invoice section
    document.getElementById("invoice").innerHTML = invoiceContent;
}

window.onload = loadCart;