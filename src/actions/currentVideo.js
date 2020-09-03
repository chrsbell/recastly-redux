import exampleVideoData from '../data/exampleVideoData.js';

var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  if (!video) {
    video = exampleVideoData[0];
  }
  return {type: 'CHANGE_VIDEO', video: video};
};

export default changeVideo;
