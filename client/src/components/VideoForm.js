import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addVideo } from "../modules/videoManager";

const VideoForm = () => {


  const [video, setVideo] = useState({
    title: '',
    description: '',
    url: ''
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const newVideo = { ...video };
    newVideo[event.target.id] = event.target.value
    setVideo(newVideo)
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addVideo(video).then(() => {
        history.push("/")
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="video title"
          value={video.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="url">URL</Label>
        <Input type="text" name="url" id="url" placeholder="video link" 
          value={video.url}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description"
          value={video.description}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default VideoForm;
