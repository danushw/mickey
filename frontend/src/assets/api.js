import axios from 'axios';

// const origin = window.location.origin;
// const origin = window.location.origin;
// const url = `${origin}:5001/api/mickeys/`;
// const url = 'http://localhost:5000/api/mickeys';
const url =
    'https://uvmc02rzug.execute-api.eu-north-1.amazonaws.com/api/mickeys/';
// console.log('url = ' + url);

// console.log(url);
export const fetchMickeys = async () => {
    try {
        const res = await axios.get(url);
        console.log('res = ' + res.data);
        return res.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch Mickeys');
    }
};
