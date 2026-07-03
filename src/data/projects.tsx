export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  stack: string[]
  status: 'Live' | 'In Development'
  github?: string
  live?: string
  featured: boolean
  caseStudy?: string
}

export const projects: Project[] = [
  {
    id: 'bakeflow-erp',
    number: '01',
    name: 'BakeFlow ERP',
    tagline: 'Enterprise resource planning for bakery operations',
    description: 'Full-stack ERP system for bakery operations — production planning, inventory management, sales tracking, and financial reporting.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    status: 'Live',
    live:'https://dre-orion-07.github.io/Production-and-Business-Managment-system/',
    featured: true,
    caseStudy: '/projects/bakeflow',
  },
  {
    id: 'cinemax',
  number: '03',
  name: 'CineMax',
  tagline: 'Production-grade movie and TV discovery platform',
  description: 'Full-stack movie discovery platform with AI-powered recommendations, real-time TMDB data, universal search, and dedicated sections for Movies, TV Shows, Anime, and Nollywood content.',
  stack: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Groq AI', 'TMDB API', 'Vercel'],
  status: 'Live',
  live: 'https://cine-max-xi.vercel.app',
  github: 'https://github.com/dre-orion-07/CineMax',
  featured: true,
  caseStudy: '/projects/cinemax',
  },
  {
    id: '4as-bakery',
    number: '03',
    name: "4A's Bakery",
    tagline: 'E-commerce platform for a commercial bakery',
    description: 'Full e-commerce platform for 4A\'s Bakery — product ordering, checkout, authentication, and order tracking.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    status: 'In Development',
    live: 'https://dre-orion-07.github.io/4As-Bakery/',
    featured: true,
  },
  {
    id: 'bookmatch-ai',
    number: '04',
    name: 'BookMatch AI',
    tagline: 'AI-powered book recommendation engine',
    description: 'An AI-powered book recommendation platform that learns your interests and recommends books you\'ll actually enjoy.',
    stack: ['React', 'Python', 'OpenAI'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 'rag-chatbot',
    number: '05',
    name: 'RAG Chatbot',
    tagline: 'Retrieval-augmented generation chat application',
    description: 'A chat application powered by RAG architecture — document ingestion, semantic retrieval, and LLM response generation.',
    stack: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
    status: 'In Development',
    featured: false,
  },
]