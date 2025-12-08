'use client'

import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Next.js and Stripe integration',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio built with Next.js, TypeScript and shadcn/ui',
      tech: ['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Next.js Applications',
      excerpt: 'Learn how to structure your Next.js projects for scalability and maintainability using modern patterns.',
      date: '2024-05-15',
      readTime: '8 min read',
      category: 'Next.js'
    },
    {
      id: 2,
      title: 'Mastering shadcn/ui Components',
      excerpt: 'Deep dive into building beautiful interfaces with shadcn/ui and Tailwind CSS.',
      date: '2024-05-10',
      readTime: '6 min read',
      category: 'UI/UX'
    },
    {
      id: 3,
      title: 'TypeScript Best Practices 2024',
      excerpt: 'Essential TypeScript patterns and practices for modern web development.',
      date: '2024-05-05',
      readTime: '10 min read',
      category: 'TypeScript'
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <HeroSection />
      {/* Skills Section */}

      <SkillsSection />

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">Some of my recent work that I'm proud of</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge>{project.category}</Badge>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.github}>GitHub</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.live}>Live Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Latest from Blog</h2>
              <p className="text-slate-600 dark:text-slate-400">Recent thoughts on web development and technology</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">Read All Posts</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <Badge>{post.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start a project?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
