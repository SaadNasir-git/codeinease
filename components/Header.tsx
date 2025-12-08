'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'About' },
    ]

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path
        }
        return pathname.startsWith(path)
    }

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const active = isActive(href)
        return (
            <Link
                href={href}
                className={cn(
                    "transition-colors pb-1 text-sm font-medium",
                    active
                        ? "text-slate-900 dark:text-slate-100 border-b-2 border-slate-900 dark:border-slate-100"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                )}
            >
                {label}
            </Link>
        )
    }

    const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
        const active = isActive(href)
        return (
            <Link
                href={href}
                className={cn(
                    "w-full py-3 px-4 rounded-lg transition-colors text-base font-medium",
                    active
                        ? "text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                )}
                onClick={() => setIsMenuOpen(false)}
            >
                {label}
            </Link>
        )
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-lg" />
                        <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            Portfolio
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink key={item.href} href={item.href} label={item.label} />
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button 
                            variant="default"
                            className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
                        >
                            Get in Touch
                        </Button>
                    </div>

                    {/* Mobile Menu - Using Sheet component */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden h-9 w-9 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent 
                            side="right"
                            className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-l border-slate-200 dark:border-slate-800 w-[300px] sm:w-[350px]"
                        >
                            {/* Dialog Title for screen readers */}
                            <SheetTitle className="sr-only">
                                Navigation Menu
                            </SheetTitle>
                            
                            <div className="flex flex-col h-full">
                                {/* Sheet Header */}
                                <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                                    <Link 
                                        href="/" 
                                        className="flex items-center space-x-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <div className="w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-lg" />
                                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                            Portfolio
                                        </span>
                                    </Link>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 p-6">
                                    <div className="flex flex-col space-y-3">
                                        {navItems.map((item) => (
                                            <MobileNavLink key={item.href} href={item.href} label={item.label} />
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                                    <Button 
                                        className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get in Touch
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Header