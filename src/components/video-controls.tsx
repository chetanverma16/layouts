import React, { useRef, useState } from "react";

interface VideoControlsProps {
  src: string;
  poster?: string;
  fallbackImage?: string;
  width?: number | string;
  height?: number | string;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  src,
  poster,
  fallbackImage,
  width = "100%",
  height = "auto",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isError, setIsError] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div
      style={{ width, height, position: "relative", cursor: "pointer" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isError ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="auto"
          width={width}
          height={height}
          style={{ display: "block", width: "100%", height: "100%" }}
          onError={handleError}
          muted
          className="rounded-lg shadow-sm overflow-hidden object-cover"
        />
      ) : (
        <img
          src={fallbackImage || poster || ""}
          alt="Video preview"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default VideoControls;
