import { X } from "lucide-react";

export default function VideoDialog({
    src,
    width = "640",
    height = "360",
    setSelectedProject,
}) {
    return (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg rounded-lg flex items-center justify-center p-4">
            <X className="absolute top-32 right-64 cursor-pointer bg-background text-white rounded-full p-1" onClick={() => setSelectedProject(null)} />
            <iframe
                src={src}
                width={width}
                height={height} 
                style={{ 
                    height: height,
                    width: width,
                    aspectRatio: `${width} / ${height}`,
                    borderRadius: "1rem"
                }}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
                frameborder="0"
            />
        </div>
    );
}
