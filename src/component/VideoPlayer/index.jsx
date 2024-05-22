import React from "react";
import ReactPlayer from "react-player";


const VideoPlayer = () => {
  return (
    <>
      <h1>Video Player</h1>
      <ReactPlayer

        url='https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4'
        controls={true}
      />


    </>
  );
};

export default VideoPlayer;
