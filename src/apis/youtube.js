import axios from 'axios';


const KEY ='AIzaSyA-DVHQmVTxUGhmkOnQa8-TaSRvUxSMpSo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY,
        type:'video'
    }
})