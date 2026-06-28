export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'] },
  { category: 'Tools & More', skills: ['Git', 'Vite', 'Figma', 'AI Integration'] },
]