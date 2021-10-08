import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {

    
    
  console.log(video)



  return (
    <Card >
      <p className="text-left px-2">Posted by: {video.userProfile?.name}</p>
      <CardBody>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        <p>
        <Link to={`/videos/${video.id}`}>
            <strong>{video.title}</strong>
        </Link>
        </p>
        <p>Description: {video.description}</p>
        <p>Comments: { video.comments?.map(c => 
        (<p>{c.userProfile.name}: {c.message}</p>))}</p>
      </CardBody>
    </Card>
  );
};

export default Video;

//only returns one comment
// {video.comments?.map(comment => {
//     return comment.message
// })}

// { getComments.map(c => (<p>{c}</p>))
//         }