# Shabu Je Chan - Restaurant Ordering System

A modern web-based restaurant ordering system built with React and Vite. This system provides a complete solution for restaurant management including customer ordering, employee management, and admin dashboard.

## 📋 System Overview

This is a full-featured restaurant ordering platform that supports multiple user roles:

- **Customers** - Browse menu, place orders, and manage cart
- **Employees** - Handle customer orders and service
- **Administrators** - Manage restaurant operations and view dashboard

## 🏗️ System Architecture

```
shabu-je-chan/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── admin/           # Admin-specific components
│   │   │   ├── cards/           # Card UI components
│   │   │   ├── customer/        # Customer-facing components
│   │   │   ├── employee/        # Employee-specific components
│   │   │   ├── layouts/         # Page layout components
│   │   │   ├── shared/          # Shared components across roles
│   │   │   └── web/             # Public web components
│   │   ├── contexts/            # React Context for state management
│   │   │   └── CartContext.jsx  # Shopping cart state management
│   │   ├── data/                # Static data and configurations
│   │   ├── pages/               # Page components
│   │   │   ├── admin/           # Admin pages
│   │   │   ├── auth/            # Authentication pages
│   │   │   ├── customer/        # Customer pages
│   │   │   ├── employee/        # Employee pages
│   │   │   └── web/             # Public web pages
│   │   ├── utils/               # Utility functions
│   │   ├── assets/              # Static assets (images, fonts)
│   │   ├── App.jsx              # Main application component
│   │   ├── main.jsx             # Application entry point
│   │   └── index.css            # Global styles
│   ├── public/                  # Public static files
│   │   └── images/              # Public images
│   ├── package.json             # Project dependencies
│   ├── vite.config.js           # Vite configuration
│   └── eslint.config.js         # ESLint configuration
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Toastify** - Notification system
- **QR Code React** - QR code generation
- **ESLint** - Code linting

## 🚀 Features

### Customer Features
- Browse restaurant menu
- Add items to cart
- Table-specific ordering (`/order/:tableNumber`)
- Cart management (`/cart/:tableNumber`)
- Time scheduling for orders (`/time/:tableNumber`)

### Employee Features
- Employee dashboard
- Order management
- Customer service tools

### Admin Features
- Admin dashboard
- System overview and analytics
- Full restaurant management

### Authentication
- Login system for all user roles

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Install Dependencies
```bash
cd frontend
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Code Linting
```bash
npm run lint
```

## 🌐 Routes

| Path | Layout | Description |
|------|--------|-------------|
| `/` | WebLayout | Public homepage |
| `/login` | - | Authentication page |
| `/order/:tableNumber` | CustomerLayout | Customer menu & ordering |
| `/cart/:tableNumber` | CustomerLayout | Shopping cart |
| `/time/:tableNumber` | CustomerLayout | Order time scheduling |
| `/admin` | AdminLayout | Admin dashboard |
| `/employes/home` | EmployeLayout | Employee dashboard |

## 🎨 Component Structure

### Layouts
- **WebLayout** - Public website layout
- **CustomerLayout** - Customer-facing pages layout
- **AdminLayout** - Admin panel layout
- **EmployeLayout** - Employee portal layout

### State Management
- **CartContext** - Global shopping cart state using React Context API

## 📱 Development Branch
Current development is on the `Develop` branch.

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 📄 License
Private project

---
*Last updated: March 2026*
