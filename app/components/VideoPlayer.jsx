"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import clsx from "clsx";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export const CustomVideoPlayer = ({
  src,
  autoPlay = false,
  showControls = false,
  thumbnail,
  key,
  className = "",
  width = "100%",
  height = "100%",
  playing: forcePlaying,
}) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const [playing, setPlaying] = useState(forcePlaying || autoPlay);
  const [muted, setMuted] = useState(true); // MUTE by default to allow autoplay
  const [progress, setProgress] = useState(0);

  const toggleFullScreen = () => {
    if (screenfull.isEnabled && containerRef.current) {
      screenfull.request(containerRef.current);
    }
  };

  useEffect(() => {
    if (typeof forcePlaying === "boolean") {
      setPlaying(forcePlaying);
    }
  }, [forcePlaying]);

  useEffect(() => {
    // Force ReactPlayer to play on load
    if (autoPlay || forcePlaying) {
      setPlaying(true);
    }
  }, []);

  return (
    <div
      key={key}
      ref={containerRef}
      className={clsx(
        "relative w-full aspect-video bg-card rounded-xl overflow-hidden shadow-lg",
        className
      )}
      onContextMenu={(e) => e.preventDefault()}
    >
      <ReactPlayer
        ref={playerRef}
        url={src}
        playing={playing}
        muted={muted}
        width={width}
        height={height}
        controls={showControls}
        light={thumbnail || false}
        onProgress={({ played }) => setProgress(played)}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              preload: "auto",
              poster: thumbnail,
            },
          },
        }}
        style={{ pointerEvents: showControls ? "auto" : "none" }}
      />

      {!showControls && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 z-10">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded overflow-hidden mb-2">
            <div
              className="h-full bg-primary transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPlaying(!playing)}
                className="text-primary hover:text-accent transition"
              >
                {playing ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={() => setMuted(!muted)}
                className="text-primary hover:text-accent transition"
              >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
            <button
              onClick={toggleFullScreen}
              className="text-primary hover:text-accent transition"
            >
              <Maximize2 size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
