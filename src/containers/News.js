import React, { Component } from 'react';

import api from '../services/api';

class News extends Component {

    state = {
        firstNews: {}
    }

    constructor(props) {
        super(props);

        let initialData = [{}];

        if (props.staticContext) {
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        if (initialData && initialData.length)
            this.state = { firstNews: initialData[0] };
    }

    componentDidMount() {
        this.getFirstNews();
    }

    static requestInitialData() {
        return api.getAllNews();
    }

    getFirstNews = async () => {
        const firstNews = await api.getFirstNews();
        this.setState({ firstNews });
    }

    render() {
        const firstNewsTitle = this.state.firstNews && this.state.firstNews.title ? this.state.firstNews.title : 'nothing here';

        return (
            <div>
                <h1>Here is the first news item:</h1>
                {firstNewsTitle}
            </div>
        )
    }
}

export default News;