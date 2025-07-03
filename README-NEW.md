# CodeBattle Arena - Modernized

A modern, AI-powered competitive coding platform built with React, Tailwind CSS, and Node.js.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design built with React and Tailwind CSS
- **Authentication**: Secure authentication powered by Clerk
- **Code Editor**: Monaco Editor integration for a VS Code-like coding experience
- **Problem Solving**: Extensive problem library with multiple difficulty levels
- **Real-time Leaderboard**: Global rankings and competition tracking
- **Progress Tracking**: Detailed statistics and achievement system
- **Multi-language Support**: Support for JavaScript, Python, Java, C++, and C

## 🛠️ Tech Stack

### Frontend (client-new)
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **Monaco Editor** - Code editor component
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend (server-new)
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Clerk Express** - Authentication middleware
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
CodeBattle-Arena/
├── client-new/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server-new/          # Node.js backend
│   ├── src/
│   │   ├── config/      # Database and configuration
│   │   ├── middleware/  # Custom middleware
│   │   ├── routes/      # API routes
│   │   └── index.js     # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (local or cloud)
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CodeBattle-Arena.git
   cd CodeBattle-Arena
   ```

2. **Setup Backend**
   ```bash
   cd server-new
   npm install
   cp .env.example .env
   # Configure your environment variables in .env
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../client-new
   npm install
   cp .env.example .env
   # Configure your environment variables in .env
   npm start
   ```

### Environment Variables

#### Backend (.env)
```env
NODE_ENV=development
PORT=5000
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
MONGO_DB_URL=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

#### Frontend (.env)
```env
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
REACT_APP_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Authentication
- All protected routes require Clerk authentication
- JWT tokens are handled automatically by Clerk

### Endpoints

#### Problems
- `GET /api/problems` - Get all problems
- `GET /api/problems/:id` - Get specific problem
- `POST /api/problems/:id/submit` - Submit solution (protected)

#### Users
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)
- `GET /api/users/stats` - Get user statistics (protected)

#### Leaderboard
- `GET /api/leaderboard` - Get global leaderboard
- `GET /api/leaderboard/user/:userId` - Get user rank

#### Submissions
- `GET /api/submissions` - Get user submissions (protected)
- `GET /api/submissions/:id` - Get specific submission (protected)

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)
- **Dark**: Gray-900 (#111827)

### Typography
- **Primary Font**: Poppins
- **Code Font**: Fira Code

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push to main branch

## 📱 Features Comparison

| Feature | Old Version | New Version |
|---------|------------|-------------|
| Framework | Vanilla HTML/CSS/JS | React + Tailwind CSS |
| Authentication | Custom | Clerk |
| Database | MongoDB | MongoDB (optimized) |
| Code Editor | ACE Editor | Monaco Editor |
| UI/UX | Basic CSS | Modern Tailwind design |
| Responsiveness | Limited | Fully responsive |
| Performance | Basic | Optimized |
| Type Safety | None | JSDoc + PropTypes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Vikash Gupta** - Frontend Development
- **Rajbeer Saha** - Frontend Development
- **Archisman Pal** - Backend Development

## 🙏 Acknowledgments

- Monaco Editor for the excellent code editor
- Clerk for seamless authentication
- Tailwind CSS for the utility-first CSS framework
- The open-source community for amazing tools and libraries

---

**Note**: This is the modernized version of the original CodeBattle Arena project, featuring a complete rewrite with modern technologies and improved user experience.
