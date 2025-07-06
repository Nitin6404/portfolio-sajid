'use client';

import Image from 'next/image';

const skills = [
  {
    category: 'Editing Software',
    items: [
      { name: 'Adobe Premiere Pro', level: 95, icon: '🎬' },
      { name: 'Final Cut Pro', level: 90, icon: '✂️' },
      { name: 'DaVinci Resolve', level: 85, icon: '🎨' },
      { name: 'After Effects', level: 88, icon: '✨' }
    ]
  },
  {
    category: 'Specializations',
    items: [
      { name: 'Color Grading', level: 92, icon: '🌈' },
      { name: 'Motion Graphics', level: 85, icon: '🎯' },
      { name: 'Sound Design', level: 80, icon: '🔊' },
      { name: 'Visual Effects', level: 75, icon: '⚡' }
    ]
  },
  {
    category: 'Content Types',
    items: [
      { name: 'Commercials', level: 95, icon: '📺' },
      { name: 'Music Videos', level: 90, icon: '🎵' },
      { name: 'Social Media', level: 93, icon: '📱' },
      { name: 'Documentaries', level: 85, icon: '🎥' }
    ]
  }
];

const tools = [
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
  { name: 'Premiere Pro', icon: '/pp.png', color: 'from-purple-500 to-blue-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card text-foreground">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Skills & Expertise
        </h2>

        {/* Tools Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Professional Tools
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="mb-3 grayscale group-hover:grayscale-0 transition duration-300"
                  />
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Skill Progress */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <div key={i} className="bg-muted rounded-xl p-6 border border-border">
              <h4 className="text-lg font-semibold mb-6 text-center">{group.category}</h4>
              <div className="space-y-5">
                {group.items.map((skill, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-input overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-in-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Tools */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-6">Additional Tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Illustrator', 'Logic Pro', 'Frame.io', 'Slack',
              'Notion', 'Figma', 'Canva', 'OBS Studio'
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-input text-sm text-muted-foreground rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
