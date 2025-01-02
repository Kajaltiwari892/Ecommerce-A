// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.querySelector('#cart-items');

function loadCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
        return;
    }
    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        itemRow.innerHTML = `
            <p>${item.name} - $${item.price} (x${item.quantity})</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
            <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
        `;
        cartItemsContainer.appendChild(itemRow);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function updateQuantity(productId, action) {
    cart = cart.map(item => {
        if (item.id === productId) {
            if (action === 'increase') item.quantity++;
            if (action === 'decrease' && item.quantity > 1) item.quantity--;
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

loadCart();
