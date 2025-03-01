import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download } from "lucide-react"
import { getBasePath } from "@/lib/path-utils"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 space-y-8 container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate full-stack developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/resume.pdf`} target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={getBasePath("/placeholder.svg?height=600&width=600")}
                  alt="Alex Johnson"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
                <p className="text-muted-foreground">
                  I'm a full-stack developer with 5+ years of experience building web applications. I specialize in
                  JavaScript, React, Node.js, and modern web technologies.
                </p>
                <p className="text-muted-foreground">
                  My journey in tech began when I built my first website at 15. Since then, I've worked with startups
                  and established companies to create intuitive and efficient digital solutions.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes
                  in the kitchen.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:alex@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground">
                Here are some of my recent projects. Each one was built with a focus on solving real problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={getBasePath(project.image || "/placeholder.svg")}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="https://github.com" target="_blank">
                  View More on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24 bg-muted/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter">Skills & Expertise</h2>
              <p className="text-muted-foreground">
                I've worked with a variety of technologies and frameworks to create robust applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Have a project in mind or just want to chat? Feel free to reach out!
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Me</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="flex justify-center gap-6">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:alex@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#about" className="hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A productivity app for teams to manage projects and track progress.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting with interactive maps and alerts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Redux", "OpenWeather API", "Mapbox"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Social Media Analytics",
    description: "Dashboard for tracking and analyzing social media performance metrics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Express", "D3.js", "Firebase"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health goals.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "GraphQL", "MongoDB", "AWS"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Recipe Finder",
    description: "Web app that helps users find recipes based on available ingredients.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Angular", "Node.js", "MySQL", "Spoonacular API"],
    demo: "https://example.com",
    github: "https://github.com",
  },
]

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git"],
  },
  {
    name: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
  },
  {
    name: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Mocha"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    name: "Other",
    skills: ["REST APIs", "WebSockets", "OAuth", "Agile/Scrum"],
  },
]

