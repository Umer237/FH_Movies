import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }
  return (
    <>
      <h1>Video Player</h1>
      <ReactPlayer
        url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
        controls={true}
      />
    </>
  );
};

export default VideoPlayer;
