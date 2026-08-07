# MERN Portfolio

A full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Deployable to Vercel for free — no credit card required.

## Features

- **Home/Hero** — Name, role, and tagline
- **About** — Bio and contact details
- **Skills** — Animated skill bars
- **Projects** — Loaded from the database via the API (falls back to sample data)
- **Contact** — Message form that stores submissions in MongoDB
- **Dark mode** — Follows your system preference

## Project Structure

```
client/
├── api/          # Express API (runs on Vercel as serverless functions, or locally)
│   ├── index.js      # Vercel function entry + local server
│   ├── app.js        # Express app (routes, CORS, JSON)
│   ├── config/       # MongoDB connection
│   ├── models/       # Project & Message schemas
│   ├── routes/       # /api/projects and /api/messages
│   └── seed.js       # Seeds sample projects into MongoDB
├── src/          # React frontend
└── vercel.json   # Routes /api/* to the serverless function
```

## Getting Started (local)

### 1. Install dependencies

```bash
cd client
npm install
```

### 2. Set up MongoDB

Use MongoDB Atlas (free): create a cluster, a database user, allow access from anywhere, and copy the connection string. Then:

```bash
cd client
copy api\.env.example api\.env
# Edit api\.env and set MONGO_URI to your connection string
```

### 3. Seed sample projects (optional)

```bash
cd client
node api/seed.js
```

### 4. Run the app (two terminals)

```bash
# Terminal 1 — start the API on port 5000
cd client
npm run dev:server

# Terminal 2 — start the frontend
cd client
npm run dev
```

Open `http://localhost:5173`. Vite proxies `/api` requests to the backend.

## Deploying to Vercel (free, no card)

1. Push this repo to GitHub
2. Go to **vercel.com** → sign up with GitHub → **Import** the repo
3. Vercel auto-detects Vite. Set:
   - **Root Directory:** `client`
   - Framework preset: **Vite** (auto)
4. Add one environment variable:
   - **Key:** `MONGO_URI`
   - **Value:** your Atlas connection string
5. Click **Deploy**

The site is served from the Vite build, and every `/api/*` request is handled by the Express app in `client/api/`.

## Customization

Update your personal details in `client/src/config/site.js`:

- Name, bio, email, location
- Social links (GitHub, LinkedIn, Twitter)
- Skills list
- Sample projects (replace with your own)

To change the projects shown on the live site, edit them via the API at `client/api/routes/projects.js` or directly in MongoDB, then re-seed.
