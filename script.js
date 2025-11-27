// Menu items data
const menuItems = [
    { id: 1, name: 'Paneer Butter Masala', price: 299, category: 'Main Course', image: 'https://imgs.search.brave.com/FcTM-YjEE87Q8RhsehvoywL0Grgk7iTd0xmjd3e6Yes/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA3L3BhbmVlci1i/dXR0ZXItbWFzYWxh/LTUwMHgzNzUud2Vi/cA' },
    { id: 2, name: 'Paneer Tikka', price: 279, category: 'Starters', image: 'https://imgs.search.brave.com/JsnADjOspPfYUuLIN9rhgrGTt5VdOFoX-1ZKNCBaRzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzA5LzAwLzcz/LzM2MF9GXzkwOTAw/NzMwMF92c0NrNXZT/aWltOXZYMnJKS2dF/ZldCMzZyY09QSkdy/Qy5qcGc' },
    { id: 3, name: 'Dal Makhani', price: 249, category: 'Main Course', image: 'https://imgs.search.brave.com/sezoOaEeyaNF9XxYSRbNEQ07XjDvihFmpzwaljOF-vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9kYWwtbWFr/aGFuaS1tYWtobmkt/bm9ydGgtaW5kaWFu/LTI2MG53LTIxMTk4/MDg5ODQuanBn' },
    { id: 4, name: 'Gulab Jamun', price: 99, category: 'Desserts', image: 'https://imgs.search.brave.com/4cIG_aYyydeTIhsFPw0nrVW_QcQD6uohj2tYHrwIePA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMwLzk1LzU3/LzM2MF9GXzUzMDk1/NTc0Ml9JOUo2N2Zp/N2FqNjY5MlhlZmxX/bEFVVm5seUVoTXkz/VC5qcGc' },
    { id: 5, name: 'Veg Biryani', price: 299, category: 'Main Course', image: 'https://imgs.search.brave.com/FeYO26ReYTzc25VjJtLTWDhP_cWHMBBBMy4q0MikpXY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE0LzQ4Lzk5/LzM2MF9GXzgxNDQ4/OTk2NV9Zb1VaWDZK/RVl5MldlTUhzN2Rn/QWpBUDlnaG9GYXpy/QS5qcGc' },
    { id: 6, name: 'Naan', price: 49, category: 'Breads', image: 'https://imgs.search.brave.com/JIxtCIiIPeGJcFAykgTpOkkT6BuLerUfj_4WgD1hDVk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzQ5Lzc2LzE5/LzM2MF9GXzEwNDk3/NjE5NDNfSkdGN0Nu/WXFqOHlVOUxjMWNp/NEtnMmtEMnZXUEhT/ZlEuanBn' },
    { id: 7, name: 'Samosa', price: 79, category: 'Starters', image: 'https://media.istockphoto.com/id/1350389050/photo/close-up-image-of-wooden-chopping-board-full-of-fried-samosas-stuffed-with-spiced-potato-peas.jpg?s=612x612&w=0&k=20&c=OoPcS28MeROdPnI5BWzcOfLlsxmtTmUqai4VjThsM0g=' },
    { id: 8, name: 'Palak Paneer', price: 289, category: 'Main Course', image: 'https://imgs.search.brave.com/MU8X6R2InQerE-l_X_SQIjvlpmPetmKK8iUWVPLYKNk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYWxhay1wYW5l/ZXItaW5kaWFuLXRy/YWRpdGlvbmFsLWZv/b2Qtd2l0aC1jaGVl/c2Utc3BpbmFjaC1i/bGFjay1iYWNrZ3Jv/dW5kLXNlbGVjdGl2/ZS1mb2N1c18yMzMy/MjYtNzIwLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA' },
    { id: 9, name: 'Tandoori Roti', price: 39, category: 'Breads', image: 'https://imgs.search.brave.com/B8wPsN-b-_Vy_0XPNhkxiTjzRePevDD80Gs2zc4TJWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hc3NvcnRlZC1p/bmRpYW4tYnJlYWQt/YmFza2V0LWluY2x1/ZGVzLWNoYXBhdGkt/dGFuZG9vcmktcm90/aS1uYWFuLXBhcmF0/aGEta3VsY2hhLWZ1/bGthLW1pc3NpLXJv/dGlfNDY2Njg5LTIz/MzQyLmpwZz9zZW10/PWFpc19oeWJyaWQ' },
    { id: 10, name: 'Malai Kofta', price: 279, category: 'Main Course', image: 'https://imgs.search.brave.com/vV556kiqzos_d-x2bBTTixFl87FzD4KWh6XrY521q7g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va3dpdGhtYW5h/bGkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzAzL0Ny/ZWFteS1SZXN0YXVy/YW50LVN0eWxlLU1h/bGFpLUtvZnRhLmpw/Zw' },
    { id: 11, name: 'Aloo Tikki', price: 149, category: 'Starters', image: 'https://imgs.search.brave.com/addqjz-2im2TVGZNUT2gpMTcAtScq5_hnjReOOZhtRE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9zbmFja3Mt/cmVjaXBlcy9hbG9v/LXRpa2tpLWNoYWF0/LXJlY2lwZS9hbG9v/LXRpa2tpLWNoYWF0/LXJlY2lwZS0yNTAu/anBn' },
    { id: 12, name: 'Veg Pulao', price: 229, category: 'Main Course', image: 'https://imgs.search.brave.com/Mrdynh9bXZR1thBwL8_bWbc0mG_LOltf2LhZxhdS1SM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hhcm1pc3Bhc3Np/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wNy9W/ZWdQdWxhbzYuanBn' },
    { id: 13, name: 'Rasgulla', price: 89, category: 'Desserts', image: 'https://imgs.search.brave.com/QnJTDhpkg84Vd0a3wx10d-j0WX4cfpWd7BG59Th7fAk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzQzLzQwLzg3/LzM2MF9GXzEzNDM0/MDg3NzRfWHd4Y1lh/b1VqQ25icmVVTlUy/bUROUHJlRE1RUFE1/OTcuanBn' },
    { id: 14, name: 'Masala Dosa', price: 199, category: 'South Indian', image: 'https://imgs.search.brave.com/3hN3g0gd76DBypDsH49qrDi8wWZLVDZdqyK8P69ank8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5Lzc0/LzAxLzE5NzQwMTU2/NzI5ZDllOTJhMTY5/OWRmZDM2MjdkNGQ1/LmpwZw' },
    { id: 15, name: 'Idli Sambar', price: 149, category: 'South Indian', image: 'https://imgs.search.brave.com/gLKhZLyU5C45nEALnb2si5ZN8F0FS3Lc0zHmn6yzadQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pZGxp/LXNhbWJhci0xNDkz/NTgxNi5qcGc' },
    { id: 16, name: 'Chana Masala', price: 249, category: 'Main Course', image: 'https://imgs.search.brave.com/NdQf_MXrZJLb3vChn2Sog8cvypdhyOskLWRkc8PTGVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhZm9ydHVybWVy/aWMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzAzL0F1/dGhlbnRpYy1DaGFu/YS1NYXNhbGEtMy5q/cGc' }
];

// Current order
let currentOrder = [];

// Initialize the application
$(document).ready(function() {
    // Check authentication first
    if (!checkAuth()) {
        return;
    }

    // Display logged in user
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    $('#userDisplay').text(`Welcome, ${authToken.username}`);

    displayMenuItems();
    setupEventListeners();
});

// Display menu items
function displayMenuItems() {
    const menuContainer = $('#menuItems');
    menuContainer.empty();

    menuItems.forEach(item => {
        const menuItemHtml = `
            <div class="col-md-4 menu-item">
                <div class="card">
                    <img src="${item.image}" 
                         class="card-img-top" 
                         alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">${item.category}</span>
                            <span class="price float-end">₹${item.price.toFixed(2)}</span>
                        </p>
                        <button class="btn btn-primary w-100" onclick="addToOrder(${item.id})">Add to Order</button>
                    </div>
                </div>
            </div>
        `;
        menuContainer.append(menuItemHtml);
    });
}

// Add item to order
function addToOrder(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = currentOrder.find(orderItem => orderItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentOrder.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }

    updateOrderDisplay();
    calculateTotals();
}

// Update order display
function updateOrderDisplay() {
    const orderContainer = $('#orderItems');
    orderContainer.empty();

    currentOrder.forEach(item => {
        const orderItemHtml = `
            <div class="order-item">
                <div class="d-flex justify-content-between align-items-center">
                    <span>${item.name}</span>
                    <div class="quantity-control">
                        <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <span class="price">₹${(item.price * item.quantity).toFixed(2)}</span>
                    <span class="delete-item" onclick="removeFromOrder(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </span>
                </div>
            </div>
        `;
        orderContainer.append(orderItemHtml);
    });
}

// Update item quantity
function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromOrder(itemId);
        return;
    }

    const item = currentOrder.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        updateOrderDisplay();
        calculateTotals();
    }
}

// Remove item from order
function removeFromOrder(itemId) {
    currentOrder = currentOrder.filter(item => item.id !== itemId);
    updateOrderDisplay();
    calculateTotals();
}

// Calculate totals
function calculateTotals() {
    const subtotal = currentOrder.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10; // 10% tax
    const total = subtotal + tax;

    $('#subtotal').text(`₹${subtotal.toFixed(2)}`);
    $('#tax').text(`₹${tax.toFixed(2)}`);
    $('#total').text(`₹${total.toFixed(2)}`);
}

// Setup event listeners
function setupEventListeners() {
    $('#generateBill').click(function() {
        if (currentOrder.length === 0) {
            alert('Please add items to the order first.');
            return;
        }
        
        const billDetails = generateBillDetails();
        alert(billDetails);
    });

    $('#clearBill').click(function() {
        if (confirm('Are you sure you want to clear the current order?')) {
            currentOrder = [];
            updateOrderDisplay();
            calculateTotals();
        }
    });
}

// Generate bill details
function generateBillDetails() {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    const subtotal = currentOrder.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    let billText = '====== RESTAURANT BILL ======\n\n';
    billText += `Generated by: ${authToken.username}\n`;
    billText += `Date: ${new Date().toLocaleString()}\n\n`;
    billText += 'Items:\n';
    
    currentOrder.forEach(item => {
        billText += `${item.name} x${item.quantity}: ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });

    billText += '\n=========================\n';
    billText += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
    billText += `Tax (10%): ₹${tax.toFixed(2)}\n`;
    billText += `Total: ₹${total.toFixed(2)}\n`;
    billText += '=========================\n';
    billText += 'Thank you for dining with us!';

    return billText;
} 