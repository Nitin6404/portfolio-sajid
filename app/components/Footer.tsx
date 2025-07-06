import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground mb-2">Nitin Chaudhary</h3>
            <p className="text-muted-foreground">Professional Video Editor</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link href="#about" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="#portfolio" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
              <Link href="#skills" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
              <Link href="#contact" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
            
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/nitin6404/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift w-8 h-8 bg-card hover:bg-primary rounded-full flex items-center justify-center transition-colors border border-border hover:border-primary hover:bg-secondary"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 text-muted-foreground hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://cal.com/nitinnennn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift w-8 h-8 bg-card hover:bg-primary rounded-full flex items-center justify-center transition-colors border border-border hover:border-primary"
                title="Schedule Call"
              >
                <svg className="w-4 h-4 text-muted-foreground hover:text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </ Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Nitin Chaudhary. All rights reserved. | Crafting stories through the art of editing.
          </p>
        </div>
      </div>
    </footer>
  );
}