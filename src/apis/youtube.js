import axios from 'axios';

const KEY = 'AIzaSyCdarTrlyVn2tdLPI9vcAPa86vgRJK40Ns';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});