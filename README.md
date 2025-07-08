# 🍱 Food Ordering App (Foodpanda Clone)

A fully responsive and modern **food ordering web application** inspired by **Foodpanda**, built using **React.js**, featuring dynamic restaurant menus, cart functionality, routing, and a sleek UI.

---

## 🚀 Live Demo

🔗 [View Live App](https://food-panda-clone-theta.vercel.app/)

> ⚠️ **Important Note (CORS Warning):**  
> This app uses Swiggy's internal API, which blocks frontend requests (CORS issue).  
> To view restaurant and menu data:
> - Please enable a [CORS Unblocker browser extension (Chrome)](https://chrome.google.com/webstore/detail/cors-unblock/ibljgedmbfijodgfhiafcooaipmjdnfg).
> - Without it, the app UI loads, but data may not appear.

---

## 📸 Screenshots

> _Replace the paths below with real screenshots from your project if available_

![Homepage](./screenshots/home.png)
![Restaurant Menu](./screenshots/menu.png)
![Cart Page](./screenshots/cart.png)

---

## 🛠 Tech Stack

- ⚛️ **React.js** – Functional Components, Hooks
- 🧭 **React Router DOM** – Client-side routing
- 📦 **Context API / Redux Toolkit** – Global state management
- 💅 **Tailwind CSS** – Utility-first responsive styling
- 🐢 **Shimmer UI** – Better loading experience
- 🔁 **Custom Hooks** – Reusable business logic
- 🧱 **Dynamic Routing** – Based on restaurant ID
- 🌐 **Swiggy API (from DevTools)** – Real-like restaurant/menu data
- ⚙️ **Vite** – Lightning-fast development

---

## 🎯 Features

- ✅ Browse nearby restaurants (live data)
- ✅ View menus by restaurant
- ✅ Add/remove items to/from cart
- ✅ Real-time cart badge update
- ✅ Fully responsive design
- ✅ Loading skeletons with shimmer effect
- ✅ Search restaurants by name
- ✅ Graceful error handling
- ✅ Clean, reusable component structure
- ✅ Code splitting and lazy loading

---

## 📦 Getting Started (Local Setup)

```bash
git clone https://github.com/your-username/food-panda-clone.git
cd food-panda-clone
npm install
npm run dev
