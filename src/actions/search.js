import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return function(dispatch) {
    return dispatch(changeVideoList(searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(items) {
      return items;
    })));
  };
};

// type: 'CHANGE_VIDEO_LIST',
// videos: searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(items) { return items; })
// {
//   video: searchYouTube({key: YOUTUBE_API_KEY, query: q}, changeVideoList),
//   type: 'CHANGE_VIDEO_LIST'

// };
// {
//   type: 'CHANGE_VIDEO_LIST',
// };
//TODO:  Write an asynchronous action to handle a video search!
// };

export default handleVideoSearch;


//'q' is equal to the query of the searchYoutube function
//YOUTUBE_API_KEY - searchYouTube function key argument