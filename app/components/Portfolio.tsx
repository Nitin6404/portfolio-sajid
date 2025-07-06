'use client';

import { useState } from 'react';
import VideoDialog from './VideoDialog';

const projects = [
  {
    id: 1,
    title: 'Nike Air Max Campaign',
    type: 'Commercial',
    role: 'Editing, Color Grading',
    thumbnail: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'High-energy commercial showcasing the latest Nike Air Max collection with dynamic cuts and color grading.',
    category: 'commercial'
  },
  {
    id: 2,
    title: 'Indie Band - "Midnight Dreams"',
    type: 'Music Video',
    role: 'Editing, VFX, Motion Graphics',
    thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'Cinematic music video with creative transitions and visual effects synchronized to the beat.',
    category: 'music'
  },
  {
    id: 3,
    title: 'TikTok Viral Series',
    type: 'Social Media',
    role: 'Editing, Sound Design',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'Fast-paced social media content optimized for engagement and viral potential.',
    category: 'social'
  },
  {
    id: 4,
    title: 'Tech Startup Brand Story',
    type: 'Corporate',
    role: 'Editing, Color Correction',
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'Professional brand storytelling video highlighting company values and mission.',
    category: 'corporate'
  },
  {
    id: 5,
    title: 'Wedding Cinematic Trailer',
    type: 'Wedding',
    role: 'Editing, Color Grading, Sound Design',
    thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'Emotional wedding trailer capturing the essence of a couples special day.',
    category: 'wedding'
  },
  {
    id: 6,
    title: 'Documentary Short',
    type: 'Documentary',
    role: 'Editing, Sound Mixing',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6',
    description: 'Compelling documentary short exploring environmental conservation efforts.',
    category: 'documentary'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercial', name: 'Commercials' },
  { id: 'music', name: 'Music Videos' },
  { id: 'social', name: 'Social Media' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'documentary', name: 'Documentary' }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Featured Work
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary hover:bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="text-accent text-sm font-medium">{project.type}</span>
                  <h3 className="text-foreground font-semibold text-lg">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
            <VideoDialog key={selectedProject.id} width="1000" height="563" src={selectedProject.videoUrl} setSelectedProject={setSelectedProject} />
        )}

        {/* Video Modal */}
        {/* {selectedProject && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="max-w-5xl w-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground text-lg">{selectedProject.description}</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm">
                      {selectedProject.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{selectedProject.role}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  src={selectedProject.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}