import { Project } from '@/types/project'

// Example project data - replace with your actual projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Optimized for both desktop and mobile devices.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskmanager',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features smooth animations and responsive design.',
    techStack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Advanced analytics dashboard for social media insights with real-time data visualization, export functionality, and comprehensive reporting tools.',
    techStack: ['Next.js', 'Python', 'D3.js', 'FastAPI', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/analytics',
  },
]

