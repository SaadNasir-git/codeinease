import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
                <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <i className="fas fa-user text-white text-7xl"></i>
                        </div>
                    </div>
                </div>
                
                <div className="order-2 md:order-1 text-center md:text-left">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-6">
                        Available for new projects
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                        Hi, I'm <span className="text-slate-600 dark:text-slate-400">Alex</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                        Full Stack Developer passionate about building modern web applications with
                        <span className="font-semibold text-slate-900 dark:text-slate-50"> Next.js</span>,
                        <span className="font-semibold text-slate-900 dark:text-slate-50"> TypeScript</span>, and
                        <span className="font-semibold text-slate-900 dark:text-slate-50"> Tailwind CSS</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <i className="fas fa-briefcase mr-2"></i> View My Work
                        </Button>
                        <Button variant='outline'>
                            <i className="fas fa-book-open mr-2"></i> Read My Blog
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection