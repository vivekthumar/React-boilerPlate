import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { type, className = 'button-icon', children, disabled } = this.props;
    return (
      <button type={type} disabled={disabled} className={'group relative ' + className}>
        {children}
      </button>
    );
  }
}
export default Button;
