import React, { Component } from 'react';

import api from '../services/api';
import NewsItem from '../components/NewsItem';

class News extends Component {

    state = {
        newsIds: []
    }

    constructor(props) {
        super(props);

        let initialData = [];

        if (props.staticContext) {
            initialData = props.staticContext.initialData.News;
        } else {
            initialData = window.__initialData__.News;
            delete window.__initialData__.News;
        }

        if (initialData)
            this.state = { newsIds: initialData };
    }

    componentDidMount() {
        this.getNewsIds();
    }

    static requestInitialData() {
        return api.getNewsIds().then(async (ids) => {
            let allData = { News: ids };
            let newsItemPromises = [];

            for (let id of ids) {
                newsItemPromises.push(NewsItem.requestInitialData(id));
            }

            await Promise.all(newsItemPromises).then((values) => {
                for (let i = 0; i < ids.length; i++) {
                    allData['NewsItem' + ids[i]] = values[i];
                }
            });

            return allData;
        });
    }

    getNewsIds = async () => {
        const newsIds = await api.getNewsIds();
        this.setState({ newsIds });
    }

    render() {
        const newsItems = this.state.newsIds.map((id) => {
            let staticContext = this.props.staticContext ? this.props.staticContext.initialData['NewsItem' + id] : window.__initialData__['NewsItem' + id];
            if (!this.props.staticContext) delete window.__initialData__['NewsItem' + id];
            return <NewsItem key={id} id={id} staticContext={staticContext}/>
        });

        return (
            <div>
                <h1>I am /News, here are all my NewsItem children</h1>
                { newsItems }
            </div>
        )
    }
}

export default News;