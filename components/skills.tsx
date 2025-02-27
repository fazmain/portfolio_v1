"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Cpu, Server, Cloud, Box } from "lucide-react"

const skills = [
  { name: "React", icon: <Code />, color: "bg-blue-500" },
  { name: "JavaScript", icon: <Globe />, color: "bg-yellow-500" },
  { name: "Python", icon: <Cpu />, color: "bg-green-500" },
  { name: "C++", icon: <Server />, color: "bg-red-500" },
  { name: "Node.js", icon: <Server />, color: "bg-green-600" },
  { name: "Express.js", icon: <Server />, color: "bg-gray-500" },
  { name: "Git", icon: <Code />, color: "bg-orange-500" },
  { name: "Firebase", icon: <Database />, color: "bg-yellow-600" },
  { name: "AWS", icon: <Cloud />, color: "bg-orange-600" },
  { name: "Docker", icon: <Box />, color: "bg-blue-600" },
  { name: "GraphQL", icon: <Database />, color: "bg-pink-600" },
  { name: "TypeScript", icon: <Code />, color: "bg-blue-700" },
]

export function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className={`p-4 rounded-xl ${skill.color} bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 group`}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${skill.color} text-white`}>{skill.icon}</div>
            <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
              {skill.name}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

