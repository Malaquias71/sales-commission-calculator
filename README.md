# 💰 Sales Commission Calculator

A clean, modern JavaScript-based Sales Commission Calculator built with
**HTML, CSS, and Vanilla JavaScript**.

This project demonstrates:

- DOM manipulation
- Event handling
- Input validation
- Business logic separation
- Tiered commission structures
- Local Storage persistence
- Keyboard support (Enter key)
- Basic console testing
- Clean UI styling

---

## 🚀 Live Features

✅ Calculate commission based on custom percentage\
✅ Tiered commission logic included\
✅ Input validation with user-friendly error messages\
✅ Automatically saves last entered values\
✅ Loads saved values on page refresh\
✅ Enter key support\
✅ Console-based logic testing

---

## 🧠 Business Logic

### Standard Commission Formula

    Commission = Deal Amount × (Commission Rate / 100)

### Tiered Commission Structure

- 5% for deals ≤ \$10,000\
- 7% for deals ≤ \$50,000\
- 10% for deals \> \$50,000

---

## 🛠 Tech Stack

- HTML5
- CSS3 (Modern UI, Flexbox, Gradients)
- JavaScript (ES6+)
- Local Storage API

---

## 📂 Project Structure

    sales-commission-calculator/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

---

## 📸 Screenshot

Add a screenshot here after deployment:

    ![Commission Calculator Screenshot](assets/screenshot.png)

---

## 🔧 Installation & Setup

1.  Clone the repository:

```{=html}
<!-- -->
```

    git clone https://github.com/YOUR-USERNAME/sales-commission-calculator.git

2.  Navigate into the project folder:

```{=html}
<!-- -->
```

    cd sales-commission-calculator

3.  Open `index.html` in your browser.

No dependencies required.

---

## 🌍 Deployment Options

You can deploy this project using:

### GitHub Pages

1.  Push your project to GitHub
2.  Go to **Settings → Pages**
3.  Select branch: `main`
4.  Save
5.  Your project will be live at:

```{=html}
<!-- -->
```

    https://your-username.github.io/sales-commission-calculator/

### Netlify / Vercel

- Drag and drop the folder
- Or connect your GitHub repo
- Automatic deployment enabled

---

## 🧪 Console Testing

The project includes basic test cases:

    calculateCommission(10000, 10) // Expected: 1000
    calculateTieredCommission(20000) // Expected: 1400

Open DevTools → Console to see test results.

---

## 🎯 Future Improvements

- Currency formatting with Intl.NumberFormat
- Commission breakdown visualization
- Dark/Light mode toggle
- Sales quota tracker
- Monthly earnings dashboard
- Export results to CSV
- React or TypeScript version

---

## 📈 Why This Project Matters

This project demonstrates:

- Clean separation of concerns
- Practical business logic implementation
- Real-world sales application
- Strong front-end fundamentals
- Readiness for portfolio presentation

---

## 👤 Author

Malaquias Arroyo

Building technical projects bridging **sales expertise and software
development**.

---

## 📄 License

MIT License
