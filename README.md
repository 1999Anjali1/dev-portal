# 🚀 DevPortal — Angular 21 Full Stack App

A modern developer directory portal built with Angular 21, showcasing modern Angular features and best practices.

## 🔗 Related Repositories

- **Backend API**: [devportal-api](https://github.com/1999Anjali1/devportal-api) — NestJS + PostgreSQL REST API

## 🏗️ Full Stack Architecture
Frontend (Angular 21) → Backend (NestJS) → Database (PostgreSQL)
localhost:4200          localhost:3000        devportal

## ✨ Features

- 🏠 **Home Page** — Beautiful landing page with feature highlights
- 👨‍💻 **Developer Directory** — Browse developers fetched from REST API
- 🔍 **Developer Details** — Click any developer to see full profile
- ➕ **Add Developer** — Form with full validation to add new developers
- ⚡ **Angular Signals** — Modern reactive state management
- 🛣️ **Lazy Loading Routes** — Optimized page loading

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 21.x | Frontend Framework |
| TypeScript | 5.x | Programming Language |
| SCSS | - | Styling |
| Angular Router | 21.x | Navigation |
| Reactive Forms | 21.x | Form Handling |
| HttpClient | 21.x | API Integration |

## 🧠 Angular Concepts Covered

- ✅ Standalone Components
- ✅ Angular Signals (`signal`, `computed`)
- ✅ New Control Flow (`@if`, `@for`)
- ✅ Component Communication (`@Input`, `@Output`)
- ✅ Services & Dependency Injection
- ✅ HTTP Client & API Integration
- ✅ Lazy Loading Routes
- ✅ Reactive Forms & Validation
- ✅ OnPush Change Detection
- ✅ Zoneless Angular 21

## 🚀 Getting Started

### Frontend
```bash
git clone https://github.com/1999Anjali1/dev-portal.git
cd dev-portal
npm install
ng serve
```
Open browser at `http://localhost:4200`

### Backend
```bash
git clone https://github.com/1999Anjali1/devportal-api.git
cd devportal-api
npm install
npm run start:dev
```
API running at `http://localhost:3000`

## 📁 Project Structure
src/app/
├── components/
│   ├── profile-header/
│   └── skills-manager/
├── pages/
│   ├── home/
│   ├── developers/
│   ├── developer-detail/
│   └── add-developer/
└── services/
└── developer.service.ts

## 👩‍💻 Developer

**Anjali P** — Full Stack Developer
Angular | NestJS | Node.js | PostgreSQL | TypeScript