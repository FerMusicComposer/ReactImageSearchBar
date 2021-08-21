import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AcXk21_bb5kkqU5SoZ4pFR92cAfgnjbdZXRhNRvpaeY',
    },
});
