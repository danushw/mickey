import axios from 'axios';

const url = 'http://127.0.0.1:5000/mickeys/';

export const fetchMickeys = async () => {
    try {
        const res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
    }
};
