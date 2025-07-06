'use client';

import { useState, useRef } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center px-6 py-16">
      {/* Background Video + Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://res.cloudinary.com/doaggd1wa/video/upload/v1736307202/samples/dance-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 items-center gap-y-12 lg:gap-12">
        {/* Text Side */}
        <div className="col-span-1 text-center w-full lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            I Cut Stories
            <span className="block text-primary">That Stick</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professional video editor crafting compelling narratives through rhythm, emotion, and visual storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              View Portfolio
            </a>
            <a
              href="https://cal.com/nitinnennn"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Video Side */}
        <div className="col-span-2 flex-1 w-full">
          <div className="aspect-video bg-card rounded-2xl overflow-hidden border border-border shadow-2xl relative">
            {!isPlaying ? (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-muted video-overlay">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/doaggd1wa/video/upload/v1736307202/samples/dance-2.mp4')] bg-cover bg-center opacity-60" />

                <button onClick={handlePlayVideo} className="relative z-10 group">
                  <div className="w-24 h-24 bg-primary hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/50">
                    <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </button>

                <div className="absolute bottom-6 left-6 text-foreground">
                  <p className="text-lg font-semibold mb-1">Watch My Showreel</p>
                  <p className="text-sm text-muted-foreground">See my latest work in action</p>
                </div>

                <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-sm text-foreground font-medium">2:30</p>
                </div>
              </div>
            ) : (
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=doaggd1wa&public_id=samples%2Fdance-2&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[showLogo]=false&player[aiHighlightsGraph]=true&player[controlBar][volumePanel]=false&player[controlBar][fullscreenToggle]=false&player[posterOptions][transformation][start_offset]=6"
                width="640"
                height="360"
                style={{
                  height: "auto",
                  width: "100%",
                  aspectRatio: "640 / 360"
                }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce border border-border rounded-3xl px-2 py-3">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
