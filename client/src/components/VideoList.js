import React, { useEffect, useState } from "react";
import Video from './Video';
import VideoSearch  from './VideoSearch';
import VideoForm from "./VideoForm";
import { getAllVideosWithComments } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

//   const getVideos = () => {
//     getAllVideos().then(videos => setVideos(videos));
//   };

  const getVideosWithComments = () => {
    getAllVideosWithComments().then(videos => setVideos(videos));
  }

  useEffect(() => {
    // getVideos();
    getVideosWithComments()
        // .then(getsomething); //add another useeffect
  }, []);

  return (
    <div>
      <div>
        <VideoSearch Videos={setVideos}/>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {videos.map((video) => (
            <Video video={video} key={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
