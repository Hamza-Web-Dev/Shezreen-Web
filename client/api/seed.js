import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Project from './models/Project.js'

dotenv.config()

const sampleProjects = [
  {
    title: 'Task Manager App',
    description:
      'A full-stack task management app with user authentication, drag-and-drop kanban boards, and real-time collaboration.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/your-username/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    featured: true,
  },
  {
    title: 'E-Commerce Store',
    description:
      'An online store with product catalog, shopping cart, Stripe payments, and order history powered by a REST API.',
    techStack: ['React', 'Redux', 'Express.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/your-username/ecommerce-store',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    title: 'Chat Application',
    description:
      'A real-time chat app with private rooms, message history, typing indicators, and JWT-based authentication.',
    techStack: ['React', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/chat-app',
    liveUrl: 'https://chat-demo.vercel.app',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'A blog CMS with markdown editor, categories, comments, and an admin dashboard for content management.',
    techStack: ['React', 'Express.js', 'MongoDB', 'Multer'],
    githubUrl: 'https://github.com/your-username/blog-platform',
    liveUrl: 'https://blog-demo.vercel.app',
    featured: false,
  },
]

const seed = async () => {
  await connectDB()
  await Project.deleteMany({})
  await Project.insertMany(sampleProjects)
  console.log('Database seeded with sample projects')
  process.exit(0)
}

seed()
