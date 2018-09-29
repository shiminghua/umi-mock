import { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {

  static contextTypes = {
    text: PropTypes.string
  };

  render() {
    console.log(this.context);
    return (
      <div>
        <div>子组件</div>
        <div>{this.context.text}</div>
      </div>
    );
  }
}

class Ancestor extends Component {

  static childContextTypes = {
    text: PropTypes.string
  };

  getChildContext() {
    return {
      text: 'context 中的数据'
    };
  }

  render() {
    return (
      <Child />
    );
  }
}

export default Ancestor;