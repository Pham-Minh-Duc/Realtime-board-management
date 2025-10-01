# Realtime-board-management
Mini Trello App

A collaborative task management web application built with Next.js, ExpressJS, Firebase, and Tailwind CSS. Users can sign in via GitHub, create boards, add cards, assign tasks, and manage everything in real time.

---

## How to Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/your-username/realtime-board-management.git
cd realtime-board-management
```
2. **Install dependencies**

npm install

3. **Set up environment variables**

- GITHUB_CLIENT_ID = your_client_id
- GITHUB_CLIENT_SECRET = your_client_secret
- NEXTAUTH_SECRET = your_nextauth_secret
- NEXTAUTH_URL = http://localhost:5050
- NEXT_PUBLIC_API_URL = http://localhost:5000

4. **Run the app**

  Frontend: npm run dev
  
  Backend: nodemon index.js

## Features
- GitHub OAuth login via NextAuth. (completed)
- Create and manage cards and tasks. (completed)
- Drag and Drop tasks between status, update status realtime. (completed)
- Real-time updates using Firebase Firestore. (completed)
- Dashboard layout with sidebar navigation. (completed)
- Responsive UI built with Tailwind CSS. (completed)
- Google OAuth login. (imcomplete)
- Using webSocket for every users to join in projects(cards). (incomplete)
- Create cards, tasks and display cards, tasks list. (complete)
- CRUD, C completed, RUD incomplete.
