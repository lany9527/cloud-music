/**
 * Created by littlestone on 17-5-9.
 */
import React, {Component} from 'react';
import './ArrowsCmp.less';
class ArrowsCmp extends Component {
  handleArrowClick(i){
    this.props.turn(i);
  }
  render() {
    return (
      <div className="arrows-wrap">
        <span
          className="arrow arrow-left"
          onClick={()=>{this.handleArrowClick(-1)}}>
          &lt;
        </span>
        <span
          className="arrow arrow-right"
          onClick={()=>{this.handleArrowClick(1)}}>
          &gt;
        </span>
      </div>
    )
  }
}

export default ArrowsCmp;