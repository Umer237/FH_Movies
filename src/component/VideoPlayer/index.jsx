import { CldVideoPlayer } from "next-cloudinary";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const VideoPlayer = () => {
  return (
    <>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="samples/cld-sample-video"
      />
      <h1>Video Player</h1>
    </>
  );
};

export default VideoPlayer;
