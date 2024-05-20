import { useState, useEffect } from 'react';
import MickeyContainer from './MickeyContainer';
import Table from './DataTable.jsx';
import { Box, Stack } from '@mui/material';
import { fetchMickeys } from '../assets/api.js';

const Home = () => {
    const [mickeyMouses, setMickeyMouses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedMickeyMouses = await fetchMickeys();

            setMickeyMouses(fetchedMickeyMouses);
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Stack
                justifyContent='space-between'
                alignItems='center'
                height='100vh'
                sx={
                    {
                        // bgcolor: 'purple',
                    }
                }
            >
                <MickeyContainer mickeyMouses={mickeyMouses} />
                <Table mickeyMouses={mickeyMouses} />
            </Stack>
        </Box>
    );
};
export default Home;
