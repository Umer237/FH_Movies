// import { CldVideoPlayer } from "next-cloudinary";
import React, { Component } from "react";
import ReactPlayer from "react-player";
// import "next-cloudinary/dist/cld-video-player.css";

const VideoPlayer = () => {
  return (
    <>
      {/* <CldVideoPlayer
        width="1920"
        height="1080"
        src="https://res.cloudinary.com/dssjm9ugg/video/upload/v1716381873/samples/cld-sample-video.mp4"
        onMetadataLoad={({ player }) => {
          console.log(`[CldVideoPlayer] Duration: ${player.duration()}`);
        }}
        onPause={({ player }) => {
          console.log(`[CldVideoPlayer] Current Time: ${player.currentTime()}`);
        }}
      /> */}
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
    </>
  );
};

export default VideoPlayer;
