import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import { setMessage } from '../actions/messageActions';
import Loading from '../components/Loading';

const PostForm = Loadable({
    loader: () => import(/* webpackChunkName: "postFormChunk" */'../components/Postform'),
    loading: Loading,
    modules: ['postFormChunk']
});

class HomePage extends Component {
    componentDidMount() {
        if (!this.props.message) {
            this.props.setMessage("Hi, I am from client!!!");
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to the home page</h1>
                <p>Redux: {this.props.message}</p>
                <PostForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message.message
});

export default connect(mapStateToProps, { setMessage })(HomePage);
