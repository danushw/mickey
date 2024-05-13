import { useState } from 'react';
import MickeyDropdown from './MickeyDropdown';
import MickeyImage from './MickeyImage';
import { Box, Stack } from '@mui/material';

const MouseContainer = ({ mickeyMouses }) => {
    const [selectedMickey, setSelectedMickey] = useState(mickeyMouses[0].id);

    const handleSelect = (id) => {
        console.log('selected mouse = ' + id);
        setSelectedMickey(id);
    };

    return (
        <Stack
            direction='row'
            spacing={20}
            justifyContent='space-between'
            alignItems='center'
        >
            <MickeyDropdown
                mickeyMouses={mickeyMouses}
                onSelect={handleSelect}
            />
            <MickeyImage
                selectedMickey={selectedMickey}
                mickeyMouses={mickeyMouses}
            />
        </Stack>
    );
};

export default MouseContainer;
