import MickeyContainer from './MickeyContainer';
import Table from './DataTable.jsx';
import mickeyMouses from '../data.js';
import { Box, Stack } from '@mui/material';
const Home = () => {
    return (
        <Box>
            <Stack
                spacing={2}
                justifyContent='space-between'
                sx={{
                    bgcolor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <MickeyContainer mickeyMouses={mickeyMouses} />
                <Table mickeyMouses={mickeyMouses} />
            </Stack>
        </Box>
    );
};
export default Home;
