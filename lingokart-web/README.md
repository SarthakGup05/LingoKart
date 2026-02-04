# 🛍️ LingoKart  
### AI-Enhanced, Multilingual Product Listings for Local Sellers

LingoKart is an **AI-ready MVP** that helps sellers create **SEO-optimized, multilingual product listings** from a single input.

Instead of only translating text, LingoKart first **enhances product content using AI for SEO and buyer intent**, and then **localizes that enhanced content into regional languages** using Lingo.dev.

---

## 🚀 Problem

Small and local sellers often struggle with:
- Writing compelling product descriptions
- Optimizing listings for search engines
- Reaching non-English-speaking customers
- Scaling content across regions

Most tools focus only on translation.  
They **don’t improve discoverability or conversion**.

---

## 💡 Solution

**LingoKart solves this in two clear stages:**

1. **AI Content Enhancement**
   - Improves descriptions for SEO
   - Adds buyer-intent language
   - Generates structured, high-quality copy

2. **Real-Time Localization**
   - Converts enhanced content into multiple regional languages
   - Preserves meaning, tone, and structure
   - Works instantly for dynamic seller input

---

## 🧠 How It Works


This pipeline ensures sellers get **both discoverability and reach**.

---

## ✨ Key Features

- 🧠 AI-enhanced product descriptions
- 🔍 SEO-focused copy generation
- 🌍 Real-time multilingual localization
- ⚡ Instant preview & copy
- 🎨 Premium UI with loading states
- 🛡️ Graceful AI fallback (demo-safe)

---

## 🌍 Localization Strategy

LingoKart uses **runtime localization** for dynamic content.

- **Tool:** Lingo.dev JavaScript SDK
- **Scope:** Seller-generated, AI-enhanced product listings
- **Why:**  
  - Content changes per user  
  - Needs on-demand translation  
  - Preserves structured objects  

Static UI text remains simple and language-agnostic in this MVP.

---

## 🧠 AI Enhancement Strategy

AI is used **before localization**, not instead of it.

### What AI does:
- Improves product descriptions for SEO
- Adds buyer-intent keywords
- Enhances clarity and structure

### Reliability First
Because free-tier AI APIs can be rate-limited:
- AI enhancement is attempted first
- If unavailable, a deterministic SEO fallback is used
- Localization always succeeds

This ensures **no broken demos** and **production-safe behavior**.

---

## 🛠️ Tech Stack

**Frontend**
- Next.js 16 (App Router)
- React
- Tailwind CSS
- shadcn/ui

**Backend**
- Next.js API Routes

**AI**
- Google Gemini API (SEO enhancement)

**Localization**
- Lingo.dev JavaScript SDK (runtime)

---

## 🌐 Supported Languages

- English (source)
- Hindi
- Tamil
- Bengali

(Architecture supports easy expansion.)

---

## 🧪 Demo Flow

1. Seller enters product details
2. AI enhances content for SEO
3. Enhanced content is localized into multiple languages
4. Seller previews and copies listings instantly

---

## 🔐 Environment Variables

```env
LINGODOTDEV_API_KEY=your_lingo_key
GEMINI_API_KEY=your_gemini_key
