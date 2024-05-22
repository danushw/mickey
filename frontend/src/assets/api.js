import axios from 'axios';

// const origin = window.location.origin;
const url = 'http://127.0.0.1:8000/public/mickeys/';

console.log(url);
export const fetchMickeys = async () => {
    try {
        const res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch Mickeys');
    }
};
