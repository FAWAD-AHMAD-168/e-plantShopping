# 🌿 Paradise Nursery – Plant Shopping Cart

Paradise Nursery is an online plant shopping application built with React and Redux Toolkit. It allows users to explore houseplants, browse plant categories, add plants to a shopping cart, and manage their cart quantities.

## 📌 Project Overview

This project was created as a React and Redux Toolkit final project to demonstrate component-based development, state management, dynamic rendering, and event handling.

## ✨ Features

- **Landing Page:** Introduces Paradise Nursery and links to the plant listing.
- **Navigation Bar:** Navigate between the landing page, plant listing, and shopping cart.
- **Plant Catalog:** View plant images, names, descriptions, and prices.
- **Plant Categories:** Browse plants grouped into categories, including aromatic and medicinal plants.
- **Add to Cart:** Add plants to the shopping cart.
- **Cart Management:** View selected plants and their quantities.
- **Quantity Controls:** Increase or decrease the quantity of each plant.
- **Delete Items:** Remove plants from the cart.
- **Price Calculation:** View unit prices, item subtotals, and the cart total.
- **Continue Shopping:** Return to the plant listing to browse more plants.
- **Checkout Button:** Access the checkout action provided by the application.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- HTML5 and CSS3
- Vite
- Git and GitHub

## 📂 Project Structure

```text
paradise/
├── public/
├── src/
│   ├── assets/
│   ├── AboutUs.jsx
│   ├── AboutUs.css
│   ├── App.jsx
│   ├── App.css
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── CartItem.jsx
│   ├── CartItem.css
│   ├── CartSlice.jsx
│   ├── store.js
│   ├── main.jsx
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/). npm is included with Node.js.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/FAWAD-AHMAD-168/paradise.git
```

**2. Navigate to the project directory**

```bash
cd paradise
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the Vite development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL shown in your terminal. Vite commonly uses `http://localhost:5173`.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🛒 How to Use

1. Open the Paradise Nursery landing page.
2. Click the option to explore the available plants.
3. Browse the different plant categories.
4. Click **Add to Cart** to select a plant.
5. Open the shopping cart from the navigation bar.
6. Use the quantity controls to increase or decrease plant quantities.
7. Click **Delete** to remove a plant from the cart.
8. Review item subtotals and the total cart cost.
9. Choose **Continue Shopping** to browse more plants or **Checkout** to use the checkout action available in the application.

## 🎯 Learning Objectives

This project demonstrates:

- Building reusable React functional components.
- Passing data between components using props.
- Managing component state with React Hooks.
- Creating Redux Toolkit actions and reducers.
- Connecting React components to Redux using React Redux.
- Rendering dynamic lists using JavaScript's `map()` method.
- Handling user interactions and button events.
- Calculating shopping cart quantities and prices.
- Organizing a React project into maintainable components.

## 🔮 Future Improvements

- Implement a complete checkout and order process.
- Add user authentication and order history.
- Integrate a payment gateway.
- Persist cart contents between browser sessions.
- Add plant search, filtering, and sorting.
- Improve accessibility and responsive design.

## 🌱 Project Purpose

Paradise Nursery was built to apply practical React and Redux Toolkit skills by creating a dynamic shopping cart for an online plant store.

## 👨‍💻 Author

**Fawad Ahmad**

- GitHub Profile: [FAWAD-AHMAD-168](https://github.com/FAWAD-AHMAD-168)
- Project Repository: [paradise](https://github.com/FAWAD-AHMAD-168/paradise)

## 📄 License

This project was created for educational purposes as part of a React and Redux Toolkit learning project.