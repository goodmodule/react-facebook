import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';


export default function MessageUs(props) {
  const {
    className,
    color,
    appId,
    pageId,
    children,
    dataRef,
    size,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-messengermessageus"
        messenger_app_id={appId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        data-ref={dataRef}
      >
        {children}
      </div>
    </Parser>
  );
}

MessageUs.propTypes = {
  className: PropTypes.string,
  appId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  dataRef: PropTypes.string,
  onParse: PropTypes.func,
};

MessageUs.defaultProps = {
  color: MessengerColor.BLUE,
  size: MessengerSize.STANDARD,
  dataRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
