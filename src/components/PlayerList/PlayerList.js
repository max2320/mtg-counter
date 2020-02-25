import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import Player from  '../Player';

class PlayerList extends PureComponent{
  handleAddPlayer = () => {
    this.props.createPlayer();
  }

  handleStartMatch = async () => {
    await this.props.startMatch();
    this.props.history.push('/');
  }


  get showIcons(){
    return this.props.matchConfig.leaders.length > 0;
  }

  renderPlayer(playerId, leader) {
    return (
      <Player
        key={playerId}
        showIcons={this.showIcons}
        leader={leader}
        {...this.props.players[playerId]}
      />
    );
  }

  renderPlayers() {
    const { leaders } = this.props.matchConfig;
    return this.props.order.map((playerId, index) => (this.renderPlayer(playerId, leaders.includes(index))));
  }

  renderButtons(){
    return [(
      <button
        className='Button Button--green'
        onClick={this.handleAddPlayer}
      >
        + Player
      </button>
    )];
  }

  render() {
    return (
      <div className="PlayerList">
        {this.renderPlayers()}

        <div className="PlayerList__controls">
          {this.props.allowCustom && this.renderButtons()}

          <Link to='/teams/edit'
            className='Button Button--blue'>
            Teams
          </Link>
          <button
            className='Button Button--green'
            onClick={this.handleStartMatch}
            disabled={!this.props.allowStart}
          >
            StartMatch
          </button>
        </div>
      </div>
    )
  }
}


export default PlayerList;
