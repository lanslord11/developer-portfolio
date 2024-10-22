"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Mock project data
// const projectsData = [
//   {
//     title: "Project 1",
//     description: "A brief description of Project 1",
//     image: "https://slyro.vercel.app/_next/image?url=%2Fprojects%2Futube.png&w=640&q=75",
//     technologies: ["React", "Node.js", "MongoDB"],
//     githubUrl: "https://github.com/yourusername/project1",
//     liveUrl: "https://project1.com"
//   },
//   {
//     title: "Project 2",
//     description: "A brief description of Project 2",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Vue.js", "Express", "PostgreSQL"],
//     githubUrl: "https://github.com/yourusername/project2",
//     liveUrl: "https://project2.com"
//   },
//   {
//     title: "Project 3",
//     description: "A brief description of Project 3",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Angular", "Django", "MySQL"],
//     githubUrl: "https://github.com/yourusername/project3",
//     liveUrl: "https://project3.com"
//   },
//   {
//     title: "Project 2",
//     description: "A brief description of Project 2",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Vue.js", "Express", "PostgreSQL"],
//     githubUrl: "https://github.com/yourusername/project2",
//     liveUrl: "https://project2.com"
//   },
//   {
//     title: "Project 3",
//     description: "A brief description of Project 3",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Angular", "Django", "MySQL"],
//     githubUrl: "https://github.com/yourusername/project3",
//     liveUrl: "https://project3.com"
//   }
  // Add more projects as needed
// ]


const projectsData = [
  {
      id: 1,
      name: 'Crab-Cart',
      description: "Conceptualized, programmed, and tested a responsive E-Commerce platform with intricate multi-tiered authorization.Utilized React.js, Node.js, and Cloudinary to facilitate the development of both frontend and backend components.Incorporated Redux for enhanced state management resulting in a 25% reduction in state-related bugs, employed MongoDB as the database solution.",
      tools: ['MERN', 'Redux', 'Cloudinary', 'Node Mailer'],
      githubUrl: 'https://github.com/lanslord11/Crab-Cart',
      liveUrl: 'https://crab-cart.onrender.com',
      image: "/image/project1.png"
  },
  {
      id: 2,
      name: 'Block-Connect',
      description: 'Crafted a userfriendly Decentralized Social Media on Ethereum Polygon, emphasizing security and transparency.Implemented IPFS for comprehensive decentralization of data storage managing over 10,000 pieces of content leveraging Fleek for decentralized deployment, thereby enhancing the platform’s resilience and sustainability.',
      tools: ['React.js', 'Solidity', "Graph", "Pinata"],
      // role: 'Full Stack Developer',
      githubUrl: 'https://github.com/lanslord11/Block-Connect',
      liveUrl: 'https://blockconnect11.vercel.app/',
      image: "/image/project2.png"
  },
  {
      id: 3,
      name: 'YT Scrapper',
      description: 'Built a web scraper with Playwright and Crawlee to extract video data (titles, views, thumbnails) from YouTube playlists and generate visual analytics. Implemented dynamic scroll handling and retries for efficient, robust data extraction from large playlists.',
      tools: ['Next.js', 'Playwright', 'Crawlee', 'Node.js' ],
      githubUrl: 'https://github.com/lanslord11/ytscrapper',
      // role: 'Full Stack Developer',
      liveUrl: '',
      image: "/image/project3.png"
  },
  {
      id: 4,
      name: 'Web3 G-Drive',
      description: 'Created a decentralized storage system using IPFS and blockchain, enhancing data resilience and security. Efficiently decentralized frontend deployment using Fleek for enhanced resilience and distributed accessibility.',
      tools: ['React', 'Solidity', 'Ethers', 'Harddhat'],
      githubUrl: 'https://github.com/lanslord11/web3-G-Drive',
      // role: 'Full Stack Developer',
      liveUrl: '',
      image: "https://slyro.vercel.app/_next/image?url=%2Fprojects%2Futube.png&w=640&q=75"
  },
  {
      id: 5,
      name: 'Docker-Reverse-Proxy',
      description: 'Built a Docker reverse proxy with Node.js, automatically routing traffic to containers without exposing host ports.',
      tools: [ 'Express', 'Dockerode', 'http-proxy', 'Docker'],
      githubUrl: 'https://github.com/lanslord11/docker-reverse-proxy',
      // role: 'Full Stack Developer',
      liveUrl: '',
      image: "/image/project5.png"
  },
  {
      id: 6,
      name: 'Vercel-Clone',
      description: 'Developed a Vercel clone with Next.js, enabling users to deploy static sites with a single command. Implemented dynamic routing and server-side rendering for enhanced performance and user experience.',
      tools: ['nextjs','redis','socket.io','ecs-s3','docker','express'],
      githubUrl: 'https://github.com/lanslord11/vercel-clone',
      // role: 'Full Stack Developer',
      liveUrl: '',
      image: "/image/project6.png"
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1a1443] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 shadow-white/10 hover:shadow-white/20"
  >
    <div className="p-8 bg-[#0D1224]">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-center rounded" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {project.tools.map((tech, index) => (
            <span key={index} className="bg-[#0D1224] text-xs text-white px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)



export default function ProjectGrid() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 px-4 sm:px-6 lg:px-8">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {visibleProjects < projectsData.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleProjects(prev => prev + 3)}
            className="bg-[#1a1443] text-white px-6 py-3 rounded-md hover:bg-[#2a1f63] transition-colors duration-300"
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  )
}