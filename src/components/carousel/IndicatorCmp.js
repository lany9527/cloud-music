import React, {Component} from 'react';
import './IndicatorCmp.less';

class IndicatorCmp extends Component {
  onClickIndicator(i) {
    let _i = i-this.props.curIndex;
    this.props.turn(_i)
  }
  render() {
    let {count, curIndex} = this.props;
    let items = [];
    for(let i=0; i<count; i++) {
      items.push(i);
    }

    return (
      <div className="indicator-wrap">
        {items.map((item,i)=>{
          return (
            <span className={"indicator-item "+(i === curIndex? "indicator-item-selected":"")} key={i} onClick={()=>{this.onClickIndicator(i)}}></span>
          )
        })}
      </div>
    )
  }
}
export default IndicatorCmp;