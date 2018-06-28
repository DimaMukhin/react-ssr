import React, { Component } from 'react';

import api from '../services/api';

export default class NewsItem extends Component {
    
    state = {
        newsTitle: ''
    }

    constructor(props) {
        super(props);

        if (this.props.staticContext) {
            this.state.newsTitle = this.props.staticContext.title;
        }
    }

    async componentDidMount() {
        let newsItem = await NewsItem.requestInitialData(this.props.id);
        this.setState({ newsTitle: newsItem.title });
    }

    static requestInitialData(id = 0) {
        return api.getNewsItem(id);
    }

    render() {
        return (
            <h1>News Item title: {this.state.newsTitle}</h1>
        )
    }
}