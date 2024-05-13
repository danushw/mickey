import { Box } from '@mui/material';

const MickeyImage = ({ selectedMickey }) => {
    const imageName = `/images/mickey_${selectedMickey}.jpg`;

    return (
        <Box>
            <img className='mickey-image' src={imageName} alt='mickey image' />
        </Box>
    );
};
export default MickeyImage;
