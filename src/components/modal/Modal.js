import React, {Component} from 'react';
import './Modal.less';



const Dialog = props => {
    const className = `modal-dialog modal-${props.animation}-${props.animationType}`;
    
    const { width, height, measure, duration, customStyles } = props;
    const style = {
        width: width + measure,
        height: height + measure,
        animationDuration: duration + 'ms',
        WebkitAnimationDuration: duration + 'ms',
    };
    const mergedStyles = { ...style, ...customStyles };

    return (
        <div style={mergedStyles} className={className}>
            {props.showCloseButton ? <span className="modal-close" onClick={props.onClose} /> : null}
            {props.children}
        </div>
    )
};

export default class Modal extends Component {
  static defaultProps = {
        width            : 400,
        height           : 240,
        measure          : 'px',
        visible          : false,
        showMask         : true,
        closeMaskOnClick : true,
        showCloseButton  : true,
        animation        : 'zoom',
        duration         : 300,
        className        : '',
        customStyles     : {},
        customMaskStyles : {},
    };

    state = {
        isShow: false,
        animationType: 'leave'
    };
    componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

    componentWillReceiveProps(nextProps) {
      console.log("Modal componentWillReceiveProps==>",this.props.visible, nextProps.visible)
        if (!this.props.visible && nextProps.visible) {
            this.enter();
        } else if (this.props.visible && !nextProps.visible) {
            this.leave();
        }
    }

    enter() {
        this.setState({
            isShow: true,
            animationType: 'enter'
        });
    }

    leave() {
        this.setState(
            { isShow: false , animationType: 'leave' }
        );
    }

    animationEnd = () => {
        if (this.state.animationType === 'leave') {
            this.setState({ isShow: false });
        }
    }


  render() {
        const { props, state } = this;
        
        const mask = props.showMask ? <div className="modal-mask" style={props.customMaskStyles} onClick={props.closeMaskOnClick ? props.onClose : null} /> : null;

        const style = {
            display: state.isShow ? '' : 'none',
            animationDuration: props.duration + 'ms',
            WebkitAnimationDuration: props.duration + 'ms'
        };

        return (
            <div style={style}
                 className={"modal modal-fade-" + state.animationType + ' ' + props.className}
                 onAnimationEnd={this.animationEnd}
            >
                {mask}
                <Dialog {...props} animationType={state.animationType}>
                    {props.children}
                </Dialog>
            </div>
        )
    }
}