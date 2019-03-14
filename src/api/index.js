import axios from '@/axios.js';

var api = {
    searchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    searchWord() {
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json')
    },
    getStyle() {
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    goodsList () {
        return axios.get('/api/meituan/list/goodsList.json')
    },
    classify() {
        return axios.get('/api/meituan/list/classify.json')
    },
    province() {
        return axios.get('/api/meituan/city/province.json')
    },
    hot() {
        return axios.get('/api/meituan/city/hot.json')
    },
    recents() {
        return axios.get('/api/meituan/city/recents.json')
    },
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },
    cityList() {
        return axios.get('/api/meituan/city/cityList.json')
    },
    login(params) {
        return axios.get('/api/meituan/login',{params})
    },
    register(params) {
        return axios.get('/api/meituan/register',{params})
    }
}

export default api;