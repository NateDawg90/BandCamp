import {connect} from 'react-redux';
import ArtistDetail from './artist_detail';
import { requestSingleArtist  } from '../../actions/artist_actions';
import {createFollow, deleteFollow} from '../../actions/follow_actions';
import { addTrackToQueue, pauseTrack } from '../../actions/track_player_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artistDetail, follow}, ownProps) => {
  return {
    currentUser: session.currentUser,
    artist: artistDetail,
    artistId: ownProps.params.artistId,
    follow
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestSingleArtist(id)),
  addTrackToQueue: (track, artist) => dispatch(addTrackToQueue(track, artist)),
  pauseTrack: () => dispatch(pauseTrack()),
  newFollow: (follow) => dispatch(createFollow(follow)),
  unFollow: (artistId) => dispatch(deleteFollow(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
