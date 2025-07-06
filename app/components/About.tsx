import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Nitin Chaudhary - Video Editor"
                  className="w-full h-full object-cover mix-blend-overlay"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            
            <div className="text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                With over <span className="text-foreground font-semibold">5 years</span> of experience in video editing, 
                I specialize in creating compelling narratives that captivate audiences and drive results.
              </p>
              
              <p className="text-lg leading-relaxed">
                My expertise spans across <span className="text-accent">commercials</span>, 
                <span className="text-accent"> music videos</span>, 
                <span className="text-accent"> social media content</span>, and 
                <span className="text-accent"> brand storytelling</span>. I believe every frame should serve a purpose, 
                every cut should enhance emotion, and every project should tell a story worth remembering.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Specializations:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Commercials', 'Music Videos', 'Social Media', 'Color Grading', 'Motion Graphics', 'Sound Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}