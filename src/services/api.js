import fetch from 'isomorphic-fetch';

export default {
    getAllNews() {
        return fetch('http://localhost:3004/news').then((data) => {
            return data.json();
        });
    },
    getFirstNews() {
        return this.getAllNews().then((data) => {
            return data[0];
        })
    },
    getNewsIds() {
        return this.getAllNews().then((news) => {
            let ids = [];
            ids = news.map((item) => item.id);
            return ids;
        });
    },
    getNewsItem(id) {
        return fetch(`http://localhost:3004/news/${id}`).then((data) => {
            return data.json();
        });
    }
}