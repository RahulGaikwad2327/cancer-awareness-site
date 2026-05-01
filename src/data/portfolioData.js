// Edit this text here
export const portfolioData = {
  name: 'Aarav Dev',
  role: 'Creative Frontend + 3D Developer',
  intro: 'I build cinematic web experiences blending code, design, and story.',
  resumePath: '/resume.pdf', // Replace this file/link here
  social: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'Email', url: 'mailto:you@example.com' }
  ],
  projects: [
    { id: 'p1', title: 'Neon Commerce', description: 'AR-first storefront with real-time personalization.', tech: ['React', 'Three.js', 'Node'], live: '#', github: '#', role: 'Lead Engineer' },
    { id: 'p2', title: 'Pulse Analytics', description: 'Narrative dashboard platform for enterprise insights.', tech: ['React', 'D3', 'Python'], live: '#', github: '#', role: 'Product Engineer' }
  ],
  skills: {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    backend: ['Node.js', 'Express', 'PostgreSQL'],
    threeD: ['Three.js', 'R3F', 'GSAP', 'Shaders'],
    creative: ['Premiere Pro', 'After Effects', 'Figma'],
    aiData: ['Prompt Engineering', 'LangChain', 'Pandas']
  },
  experience: [
    { period: '2025 - Present', title: 'Frontend Engineer Intern', org: 'Vision Labs', details: 'Built immersive marketing experiences and optimized web performance.' },
    { period: '2021 - 2025', title: 'B.Tech CSE', org: 'Tech University', details: 'Focused on graphics, interaction, and human-centered AI systems.' }
  ]
};
