import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//() => {};

const mapStateToProps = (reduxStore) => {
  return {
    video: reduxStore.currentVideo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeVideo: function(video) {
      dispatch(changeVideo(video));
    }
  };
};

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
