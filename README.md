# Restaurant-billing-system

This is a simple web-based restaurant billing system built using **HTML, CSS, JavaScript, Bootstrap, and LocalStorage**.  
It allows staff users to log in, select menu items, generate bills, update or remove items, and calculate totals with tax.

---

## 🚀 Live Demo

🔗 Link: https://sawanchoudhary-2486.github.io/Restaurant-billing-system/

---

## 📂 Project Structure

| File | Purpose |
|------|---------|
| `login.html` | Login page for authentication |
| `index.html` | Main billing interface |
| `styles.css` | Custom styling |
| `auth.js` | Login system and session handling |
| `script.js` | Billing logic, menu handling, and order processing |

---

## 🔑 Login Credentials

Default users (for demo):

| Username | Password |
|----------|----------|
| admin | admin123 |
| staff | staff123 |

*(These are stored locally for demo purposes in `auth.js`. No backend used.)*

---

## ✨ Features

- ✔️ Login authentication using LocalStorage  
- ✔️ Dynamic menu rendering  
- ✔️ Add/remove items to order  
- ✔️ Quantity update (+ / - buttons)  
- ✔️ Automatic calculation of:
  - Subtotal  
  - Tax (10%)  
  - Final total  
- ✔️ Responsive clean UI using Bootstrap  

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- Bootstrap 5  
- jQuery  

---

## 📦 How to Use

1. Log in using one of the provided credentials.
2. Click items from the menu to add them to the order.
3. Adjust quantity or delete items as needed.
4. Generate a bill or clear the current order.

---

## 🔐 Security Note

This project uses front-end-only authentication stored in browser LocalStorage.  
It is **not secure for production use** without a backend.

---

## 🧩 Future Improvements

- Cloud/database authentication  
- Order printing and PDF export  
- Admin panel for modifying menu  
- Dark mode  
- Customer history and receipts storage  

---

## 📄 License

Free to use and modify for learning or personal projects.

