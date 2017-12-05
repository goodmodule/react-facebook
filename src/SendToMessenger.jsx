import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';


export default function SendToMessenger(props) {
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
        className="fb-send-to-messenger"
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

SendToMessenger.propTypes = {
  className: PropTypes.string,
  appId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
  dataRef: PropTypes.string,
  size: PropTypes.string,
  onParse: PropTypes.func,
};

SendToMessenger.defaultProps = {
  color: MessengerColor.BLUE,
  size: MessengerSize.STANDARD,
  dataRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
