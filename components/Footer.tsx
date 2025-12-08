'use client'

import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                                <span className="text-slate-900 font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold text-slate-50">Portfolio</span>
                        </div>
                        <p className="text-slate-400">Building amazing web experiences</p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="#" className="text-slate-400 hover:text-slate-300 transition-colors">
                            GitHub
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-slate-300 transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-slate-300 transition-colors">
                            Twitter
                        </Link>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
                    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer