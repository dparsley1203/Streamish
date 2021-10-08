const baseUrl = '/api/video';
const baseUrlComments = '/api/video/GetWithComments'

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const getAllVideosWithComments = () =>{
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json()) 
};

export const getAVideoWithComments = (id) => {
  return fetch(`${baseUrl}/GetVideoByIdWithComments/${id}`)
    .then(res => res.json())
}

export const getVideoSearch = (text) => {
  return fetch(`${baseUrl}/Search?q=${text}&sortDesc=false`)
    .then(res => res.json())
}

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};