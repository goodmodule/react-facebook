import React from 'react';
import FacebookProvider from './FacebookProvider';
import ReactDom  from 'react-dom';

class Comments extends React.Component {


    static contextTypes = {
        ...FacebookProvider.childContextTypes
    };

    static defaultProps = {
        href        : 'http://www.facebook.com',
        layout      : 'standard', // standard, button_count, button or box_count
        num_posts   : 5,
        order_by    : "social",
        width       : 550,
        colorScheme : 'light'
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
        Object.keys(Comments.defaultProps).forEach(( v )=>(props["data-" + v] = me.props[v]));

        return (
            <div ref="box">
                <div className="fb-comments" {...props}></div>
            </div>
        )
    }

};
export default Comments;
