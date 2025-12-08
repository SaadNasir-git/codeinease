import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button';

const SkillsSection = () => {

    const skills = [
        { name: 'TypeScript', level: 90, category: 'language' },
        { name: 'Next.js', level: 85, category: 'framework' },
        { name: 'React', level: 88, category: 'library' },
        { name: 'Tailwind CSS', level: 92, category: 'styling' },
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'PostgreSQL', level: 75, category: 'database' },
    ];


    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">Skills & Technologies</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Here are the technologies I work with to bring ideas to life
                    </p>
                </div>

                <Tabs defaultValue="all" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-5 mb-8">
                        <Button>
                        <TabsTrigger value="all">All</TabsTrigger>
                        </Button>
                        <Button>

                        <TabsTrigger value="language">Languages</TabsTrigger>
                        </Button>
                        <Button>

                        <TabsTrigger value="framework">Frameworks</TabsTrigger>
                        </Button>
                        <Button>

                        <TabsTrigger value="library">Libraries</TabsTrigger>
                        </Button>
                        <TabsTrigger value="styling">Styling</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-6">
                        {skills.map((skill, index) => (
                            <Card
                                key={skill.name}
                                className="border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                            >
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-medium text-slate-900 dark:text-slate-50">{skill.name}</span>
                                        <span className="text-slate-600 dark:text-slate-400 font-medium">{skill.level}%</span>
                                    </div>
                                    {/* <ProgressEvent value={skill.level} className="h-2" /> */}
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>

                    {/* Other tab contents would go here */}
                </Tabs>
            </div>
        </section>
    )
}

export default SkillsSection