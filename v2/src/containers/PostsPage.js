import React, { Component } from 'react';

import Posts from '../components/Posts';

export default class PostsPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the posts page</h1>
                <Posts />
            </div>
        )
    }
}