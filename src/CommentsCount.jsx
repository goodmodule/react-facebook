import React from 'react';
import FacebookProvider, {Like, Share} from 'react-facebook';
import ReactDom  from 'react-dom';

class Comments extends React.Component {


    static contextTypes = {
        ...FacebookProvider.childContextTypes
    };

    static defaultProps = {
        href        : 'http://www.facebook.com'
    };

    componentDidMount() {
        var me = this;
        this.context.facebook.whenReady(( err, facebook ) => {
            if ( err ) {
                return;
            }
            facebook.parse(ReactDom.findDOMNode(me.refs.box), () => {
            });
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {

        var me    = this,
            props = {};
        Object.keys(Comments.defaultProps).forEach(( v )=>props["data-" + v] = me.props[v]);

        return (
            <div ref="box">
                <span className="fb-comments-count" {...props}>0</span> Comment(s)
            </div>
        )
    }

};
export default Comments;