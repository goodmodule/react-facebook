import React, {PropTypes} from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import ColorScheme from './constants/ColorScheme';
import CommentsOrderBy from './constants/CommentsOrderBy';

export default class Page extends Parser {
    static contextTypes = {
        ...Parser.contextTypes,
    };

    static propTypes = {
        ...Parser.propTypes,
        href                  : PropTypes.string.isRequired,
        tabs                  : PropTypes.string,
        height                : PropTypes.oneOfType([
                                                        PropTypes.number.isRequired,
                                                        PropTypes.string.isRequired,
                                                    ]),
        width                 : PropTypes.oneOfType([
                                                        PropTypes.number.isRequired,
                                                        PropTypes.string.isRequired,
                                                    ]),
        show_facepile         : PropTypes.bool,
        small_header          : PropTypes.bool,
        adapt_container_width : PropTypes.bool,
        children              : PropTypes.node,
    };

    static defaultProps = {
        tabs                  : "timeline",
        width                 : 550,
        height                : 300,
        show_facepile         : true,
        adapt_container_width : true,
        small_header          : false
    };

    renderComponent() {
        const {
                  tabs,
                  style,
                  href = getCurrentHref(),
                  show_facepile,
                  small_header,
                  adapt_container_width,
                  width,
                  height,
                  children,
              }        = this.props,
              appID    = this.context.facebook
                  && this.context.facebook.props.appID;// -.-
        return (
            <div
                className="fb-page"
                style={style}
                data-appID={appID}
                data-tabs={tabs}
                data-show-facepile={show_facepile}
                data-href={href}
                data-small-header={small_header}
                data-adapt-container-width={adapt_container_width}
                data-height={height}
                data-width={width}
            >
                {children}
            </div>
        );
    }
}
