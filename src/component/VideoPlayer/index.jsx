import { CldVideoPlayer } from "next-cloudinary";
import React from "react";


const VideoPlayer = () => {
  return (
    <>
      <h1>Video Player</h1>
      <CldVideoPlayer
      
      id="sea-turtle-color"
      width="1920"
      height="1080"
      src="samples/sea-turtle"
  

      />
    </>
  );
};

export default VideoPlayer;
