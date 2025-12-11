// Sample Product Data
const products = [
    { id: 1, name: "Smartphone", price: 15999, image: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Wireless Headphones", price: 2499, image: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Smart Watch", price: 3499, image: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Bluetooth Speaker", price: 1999, image: "https://via.placeholder.com/300x200" }
];

let cart = [];

// Load Products
const productList = document.getElementById("product-list");
products.forEach(product => {
    productList.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

// Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

// Update Cart Section
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <li>
                ${item.name} – ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </li>
        `;
    });

    totalPrice.innerText = total;
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}
