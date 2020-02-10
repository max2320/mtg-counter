import React, { PureComponent } from 'react';

import './style.css';
import {colors, order} from '../../../configs/consts/colors';
import { colorBackground } from '../../../lib/color';

class MatchPlayer extends PureComponent {
  id = this.props.id;

  renderColors(){

    return order.filter((color)=>this.props.colors.includes(color)).map((colorName) => {
      const { Symbol } = colors[colorName];
      const isSelected = this.props.colors.includes(colorName);
      const selectClass = isSelected ? 'active': '';

      return (
        <div className={`Match-PlayerColors__item ${selectClass}`}>
          <Symbol className='Match-PlayerColors__item-image' />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="Match-Player" style={{background : colorBackground(this.props.colors)}}>
        <div className='Match-PlayerHeader'>
          <div className='Match-PlayerHeader__name'>
            {this.props.name}
          </div>
          <div className='Match-PlayerColors'>
            {this.renderColors()}
          </div>
        </div>
      </div>
    );
  }
}

export default MatchPlayer;