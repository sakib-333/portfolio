# Sakib's Portfolio

A high-performance, responsive, and visually stunning developer portfolio built with the latest web technologies. This project showcases my skills, experience, and projects through a modern and interactive user interface.

## 🚀 Technologies Used

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

### 📦 Key Packages
- `react@19` - Latest React features & performance.
- `vite` - Next generation frontend tooling.
- `tailwindcss@4` - Modern utility-first CSS framework.
- `motion` - Powerful animation library for React.
- `react-hook-form` - Performant, flexible and extensible forms.
- `react-toastify` - Easy to use toast notifications.
- `babel-plugin-react-compiler` - Optimized React rendering logic.
- `typescript` - Static type checking for robust code.


## ✨ Key Features

- **Dynamic Hero Section:** Engaging introduction with animated roles and a modern layout.
- **Categorized Skills:** Interactive skill grid with filtering capabilities (Frontend, Backend, DBMS, Tools).
- **Smooth Animations:** Professional entrance and hover animations using Framer Motion.
- **Project Showcase:** Detailed cards for projects with descriptions and tech stacks.
- **Experience Timeline:** A polished timeline showing professional growth.
- **Responsive Design:** Optimized for all devices, from mobile phones to large desktops.
- **Scroll Spy Navigation:** Navbar automatically updates based on the current scroll position.
- **Clean Architecture:** Well-organized component-based structure for maintainability.

## 📩 Message Sending Feature

The portfolio includes a fully functional contact form that allows users to send messages directly.

### Features:
- **Client-side Validation:** Powered by `React Hook Form` to ensure all required fields (Name, Email, Subject, Message) are correctly filled before submission.
- **Secure API Integration:** Integrated with [Web3Forms](https://web3forms.com/) for reliable email delivery without a custom backend.
- **Interactive Feedback:** Real-time success and error notifications via `React Toastify`.
- **User Experience:**
  - Loading states with animated spinners on the submit button.
  - Automatic form reset upon successful submission.
  - Subject line customization for easy tracking.

## 🛠️ Project Structure

```text
src/
├── components/
│   ├── footer/      # Footer components
│   ├── header/      # Navigation and Scroll Spy logic
│   └── main/        # Core sections (About, Contact, Projects, Skills, etc.)
├── assets/          # Static assets and icons
├── App.tsx          # Main application entry and Scroll Spy setup
├── index.css        # Global styles and Tailwind configuration
└── main.tsx         # React initialization
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:sakib-333/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add your Web3Forms credentials:
   ```env
   VITE_URL=https://api.web3forms.com/submit
   VITE_API_KEY=your_web3forms_access_key
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Sakib](https://github.com/sakib-333)
