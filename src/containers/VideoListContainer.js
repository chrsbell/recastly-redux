import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (reduxStore) => ({
  videos: reduxStore.videoList
});

const mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: function(video) {
    dispatch(changeVideo(video));
  }
});


const VideoListContainer = connect(
  // mapStateToProps = (reduxStore) => {
  //   return {
  //     videos: reduxStore.videos
  //   };
  // },
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;


//the container uses connect to talk to the reduxStore

//it calls two functions when it talke to it

//mapStateToProps  - asks the store for the key name (should match the argument passed into the videoList component ) - want it to return that key name and the stores value
//example
// return { votes:  reduxStore.votes}
// return {videos: reduxStore.videos}

//mapDispatchToProps - that is talking to the store for the second argument which is a function
//returns an object with the key name that matches the function name  with a value of 'function('whatever arguement the function requires')
//new object
//call dispatch('action creator with the argument the function required')
