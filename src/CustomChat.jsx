import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';

export default function CustomChat(props) {
  const {
    className,
    ref,
    minimized,
    children,
    pageId,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-customerchat"
        data-page_id={pageId}
        data-ref={ref}
        data-minimized={minimized}
      >
        {children}
      </div>
    </Parser>
  );
}

CustomChat.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.string,
  pageId: PropTypes.string.isRequired,
  minimized: PropTypes.bool,
  onParse: PropTypes.func,
  children: PropTypes.node
};

CustomChat.defaultProps = {
  minimized: true,
  children: undefined,
  className: undefined,
  ref: undefined,
  onParse: undefined,
};
