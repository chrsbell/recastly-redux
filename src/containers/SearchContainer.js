import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';


const mapStateToProps = (reduxStore) => {
  return {
    videoList: reduxStore.videoList,
    currentVideo: reduxStore.currentVideo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: function(q) {
      dispatch(handleSearchChange(q));
    }
  };
};

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
