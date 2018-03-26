import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';

export default function MessengerCheckbox(props) {
  const {
    className,
    origin,
    prechecked,
    allowLogin,
    userRef,
    color,
    appId,
    pageId,
    children,
    size,
    onParse
  } = props;

  return React.createElement(
    Parser,
    { className: className, onParse: onParse },
    React.createElement(
      'div',
      {
        className: 'fb-messenger-checkbox',
        messenger_app_id: appId,
        page_id: pageId,
        'data-color': color,
        'data-size': size,
        'data-origin': origin,
        user_ref: userRef,
        prechecked: prechecked,
        allow_login: allowLogin
      },
      children
    )
  );
}

MessengerCheckbox.propTypes = {
  className: PropTypes.string,
  appId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  color: PropTypes.string,
  userRef: PropTypes.string,
  origin: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
  prechecked: PropTypes.bool,
  allowLogin: PropTypes.bool,
  onParse: PropTypes.func
};

MessengerCheckbox.defaultProps = {
  color: MessengerColor.BLUE,
  size: MessengerSize.STANDARD,
  allowLogin: true,
  prechecked: false,
  userRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined
};
//# sourceMappingURL=MessengerCheckbox.js.map