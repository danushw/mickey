import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { fetchMickeys } from '../assets/api.js';
import { CircularProgress } from '@mui/material';
import MickeyContainer from './MickeyContainer';
import Table from './DataTable.jsx';

const Home = () => {
    const [mickeyMouses, setMickeyMouses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMickeyMouses = await fetchMickeys();

                setMickeyMouses(fetchedMickeyMouses);
            } catch (err) {
                setError(err.message);
                // console.error(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100vh'
            >
                <CircularProgress size={80} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100vh'
            >
                <p>Error: {error}</p>
            </Box>
        );
    }

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
