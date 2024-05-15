import MickeyContainer from './MickeyContainer';
import Table from './DataTable.jsx';
import mickeyMouses from '../data.js';
import { Box, Stack } from '@mui/material';
const Home = () => {
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
