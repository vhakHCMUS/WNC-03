# IA03-User-Registration

A full-stack user registration application with **NestJS backend**, **React frontend**, and **SQLite database**. 

Perfect for local development - no external database setup required! 🚀

---

## 🎯 Quick Start (3 Steps)

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Step 1: Clone & Navigate
```bash
git clone <repository-url>
cd IA03-User-Registration
```

### Step 2: Install Everything
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Step 3: Run the App
```bash
npm run dev
```

**That's it!** 🎉

- Frontend: **http://localhost:5173**
- Backend API: **http://localhost:4000**

---

## 🚀 Features

### Backend (NestJS + Prisma + SQLite)
- ✅ User registration with password hashing (bcrypt)
- ✅ Email validation
- ✅ SQLite database (auto-created, no setup needed)
- ✅ RESTful API with error handling
- ✅ CORS enabled

### Frontend (React + Vite + Tailwind)
- ✅ Modern React with TypeScript
- ✅ Responsive design (mobile-friendly)
- ✅ Form validation (React Hook Form + Yup)
- ✅ Beautiful UI (shadcn/ui components)
- ✅ Real-time API integration (React Query)

---

## 📖 How to Use

### 1. Sign Up a New User
1. Go to **http://localhost:5173/signup**
2. Enter email: `test@example.com`
3. Enter password: `password123` (min 6 characters)
4. Click **Sign Up**
5. ✅ Success! User created

### 2. Test the Login Page
1. Go to **http://localhost:5173/login**
2. Enter any credentials
3. See mock login success message

### 3. API Testing (Optional)
```bash
# Register a user via API
curl -X POST http://localhost:4000/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"securepass"}'
```

---

## 🛠️ Alternative Commands

### Run Backend Only
```bash
cd backend
npm run start:dev
```

### Run Frontend Only
```bash
cd frontend
npm run dev
```

### Reset Database
```bash
cd backend
rm -f prisma/dev.db
npx prisma migrate dev --name init
```

---

## 📁 Project Structure

```
IA03-User-Registration/
├── backend/              # NestJS API
│   ├── src/
│   │   ├── user/        # User module (controller, service, dto)
│   │   ├── prisma/      # Prisma service
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma # Database schema
│   └── package.json
├── frontend/             # React app
│   ├── src/
│   │   ├── pages/       # Home, Login, SignUp
│   │   ├── components/  # UI components
│   │   └── lib/         # Utils & API client
│   └── package.json
└── package.json          # Root (runs both servers)
```

---

## 🔌 API Reference

### POST `/user/register`
Register a new user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2025-11-09T00:00:00.000Z"
  }
}
```

**Error Responses:**
- `400` - Invalid email or password too short
- `409` - Email already exists
- `500` - Database error

---

## 🐛 Troubleshooting

### Port Already in Use?
**Backend (4000):** Change `PORT` in `backend/.env`
**Frontend (5173):** Vite will auto-select next available port

### Can't Connect to Backend?
Check that backend is running on port 4000:
```bash
curl http://localhost:4000/user/register
```

### Module Not Found Errors?
Reinstall dependencies:
```bash
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

### Database Issues?
Delete and recreate:
```bash
cd backend
rm -f prisma/dev.db prisma/dev.db-journal
npx prisma migrate dev --name init
```

---

## 💡 Key Technologies

| Tech | Purpose |
|------|---------|
| **NestJS** | Backend framework |
| **Prisma** | Database ORM |
| **SQLite** | Embedded database |
| **React 18** | Frontend UI |
| **Vite** | Fast build tool |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **React Query** | API state management |
| **Bcrypt** | Password security |

---

## 📝 Scripts Reference

```bash
# From root directory
npm run dev              # Run both servers
npm run start:backend    # Backend only
npm run start:frontend   # Frontend only

# From backend/
npm run start:dev        # Development mode
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Run migrations
npx prisma studio        # Open database GUI

# From frontend/
npm run dev              # Development server
npm run build            # Production build
```

---

## ✨ What Makes This Easy?

- 🎯 **SQLite** - No database server setup
- 🔧 **Concurrently** - Run both servers with one command
- 📦 **All-in-one** - Complete project in single repository
- 🚀 **Fast** - Vite for instant frontend updates
- 🛡️ **Secure** - Password hashing included
- 🎨 **Beautiful** - Pre-built UI components

---

## � Deployment

### Frontend Deployment (Vercel, Netlify, Render, etc.)

When deploying the frontend to platforms like Vercel, Netlify, or Render:

#### ⚙️ Build Settings:
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### 🔧 Environment Variables:
Create an environment variable for the backend API URL:
```
VITE_API_URL=https://your-backend-url.com
```

Then update `frontend/src/lib/api.ts`:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
```

#### 📋 Platform-Specific Instructions:

**Vercel:**
1. Import your GitHub repository
2. Set **Root Directory** to `frontend`
3. Framework Preset: `Vite`
4. Add environment variable: `VITE_API_URL`

**Netlify:**
1. Connect your repository
2. Base directory: `frontend`
3. Build command: `npm run build`
4. Publish directory: `frontend/dist`

**Render:**
1. Create new Static Site
2. Root Directory: `frontend`
3. Build Command: `npm run build`
4. Publish Directory: `dist`

---

### Backend Deployment

For SQLite in production, consider:
- **Railway.app** - Easy deployment with persistent storage
- **Render.com** - Free tier with SQLite support
- **Fly.io** - Supports SQLite with volumes

**Note:** For production, consider migrating to PostgreSQL or MySQL for better scalability.

#### Backend Deployment Settings:
- **Root Directory:** `backend`
- **Build Command:** `npm run build`
- **Start Command:** `npm run start:prod`

---

## �🎓 Learning Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Guide](https://www.prisma.io/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## 📄 License

MIT

---

**Ready to start? Run `npm run dev` and visit http://localhost:5173** 🚀


