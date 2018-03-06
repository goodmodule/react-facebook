import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share';

export default function ShareButton(props) {
  const {
    className,
    iconClassName,
    icon,
    children
  } = props,
        rest = _objectWithoutProperties(props, ['className', 'iconClassName', 'icon', 'children']);

  return React.createElement(Share, _extends({}, rest, {
    render: ({ isReady, onClick }) => React.createElement(
      'button',
      {
        type: 'button',
        disabled: !isReady,
        className: className,
        onClick: onClick
      },
      !!icon && React.createElement('i', { className: iconClassName }),
      children
    )
  }));
}

ShareButton.propTypes = _extends({}, Share.propTypes, {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  icon: PropTypes.bool
});

ShareButton.defaultProps = _extends({}, Share.defaultProps, {
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
});
//# sourceMappingURL=ShareButton.js.map