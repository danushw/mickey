import axios from 'axios';
//test
const origin = window.location.origin;
const url = origin + '/api/mickeys/';

export const fetchMickeys = async () => {
    try {
        const res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
    }
};
