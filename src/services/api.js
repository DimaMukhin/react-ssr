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
    }
}