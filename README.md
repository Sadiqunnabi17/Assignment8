# 🎓 SkillSphere – Learning Platform

SkillSphere is a modern online learning platform where users can explore courses, authenticate securely, and enhance their skills through a clean and interactive UI.

---

## 🚀 Live Site

👉 https://skillsphere-two-ruby.vercel.app

---

## 📌 Features

* 🔐 **Authentication System**

  * Google Login (OAuth)
  * Email & Password Login (UI-based)
  * Protected Routes

* 👤 **User Profile**

  * Displays logged-in user info
  * Profile update support

* 📚 **Course System**

  * Popular Courses section
  * 🔥 Trending AI Courses (custom animated section)
  * Reusable course components

* 🎨 **Modern UI/UX**

  * Responsive design (mobile + desktop)
  * Tailwind CSS styling
  * Interactive hover effects

* 🎞 **Bonus Features**

  * Animated Trending Courses (right-to-left motion)
  * Toast notifications for actions

---

## 🧠 Tech Stack

* **Frontend:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Authentication:** Better Auth + Google OAuth
* **State Management:** React Context API
* **Deployment:** *(Netlify / Vercel — replace accordingly)*

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── page.js
 │   ├── login/
 │   ├── register/
 │   └── api/
 ├── components/
 │   ├── HeroSection.jsx
 │   ├── PopularCourses.jsx
 │   ├── TrendingCourses.jsx
 │   ├── Navbar.jsx
 │   └── ...
 ├── data/
 │   └── courses.json
 └── context/
     └── AuthContext.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Sadiqunnabi17/Assignment8.git
cd skillsphere
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

---

## ⚠️ Notes

* MongoDB integration is planned for future enhancement.
* Authentication currently works using Google OAuth and local state.

---

## 👨‍💻 Author

**Mohd Sadiqunnabi**
EcoSpace

---

## 📌 Future Improvements

* Full database integration (MongoDB)
* Course enrollment system
* Dashboard for users
* Payment integration

---

## ⭐ Acknowledgement

This project was developed as part of an academic assignment.

---
