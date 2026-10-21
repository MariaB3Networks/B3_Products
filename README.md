# B3Networks — Partner Product Directory

> A clean, modern, and simple product directory and sales playbook for B3Networks products, covering the **V2 App Model**, **V3 License Model**, and **OSS/BSS Platform Backbone**.

---

## 🌟 Overview

B3Networks offers a comprehensive suite of cloud communications and CPaaS products. This repository provides a clear, structured portal designed for business development (BD) teams, account managers, and partners to quickly understand and position each product.

### Key Architectural Models:
- **V2 (App Model)**: Modular standalone applications subscribed on an independent pay-per-app monthly basis. Built for SMBs, single offices, and rapid self-serve deployment (e.g., BizPhone, Wallboard, Call Recording).
- **V3 (License Model)**: Unified enterprise CPaaS suite licensed on a per-user basis. Built for mid-market and enterprise organizations needing integrated PBX, contact centers, and Microsoft Teams calling (e.g., Phone System, Contact Center, Teams Operator Connect).
- **OSS / BSS Platform Backbone**: Underlying carrier operations, number inventory management, billing, and reseller administration engine that powers all B3 services.

---

## 📁 Repository Structure

```text
├── index.html               # Main product directory (V2, V3, OSS/BSS, Model Comparison)
├── product.html             # Product detail sales sheet & specification page
├── styles.css               # Clean, minimalist, zero-icon design system
├── products.js              # Complete catalog of 31+ products with specs & BD pitch
├── product.js               # Dynamic detail page loader & URL router
├── b3networks-offline.html  # Standalone single-file edition (runs 100% offline)
├── b3networks-offline.zip   # Complete zipped offline package
├── index.php                # PHP compatible directory entry
├── product.php              # PHP compatible product detail entry
└── README-OFFLINE.md        # Offline usage guide
```

---

## 🚀 How to Run

### 1. Offline Mode (No Internet Required)
Double-click **`b3networks-offline.html`** in any web browser.
- Completely self-contained in a single file (HTML, CSS, JS, and product data bundled together).
- Requires zero dependencies, zero servers, and zero internet connection.

### 2. Multi-Page Mode
Open **`index.html`** in your browser, or serve it locally:
```bash
python3 -m http.server 8089
```
Then visit: `http://localhost:8089/`

---

## 📚 Official Reference
All specifications and sales playbooks are verified with the official [B3Networks Helpjuice Documentation](https://b3networks.helpjuice.com/).
