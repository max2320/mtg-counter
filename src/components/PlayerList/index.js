import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PlayerList from './PlayerList';
import './style.css';

import { actions } from '../../ducks/player';
import { actions as scoreBoardActions } from '../../ducks/scoreBoard';

const { createPlayer } = actions;

const mapStateToProps = ({
  player,
  match: { allowCustom },
  control: { allowStart }
}) => ({ ...player, allowCustom, allowStart });

const mapDispatchToProps = {
  createPlayer,
  startMatch: scoreBoardActions.startMatch
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerList));
