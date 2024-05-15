import { useState } from 'react';
import MickeyDropdown from './MickeyDropdown';
import MickeyImage from './MickeyImage';
import { Box, Stack } from '@mui/material';

const MouseContainer = ({ mickeyMouses }) => {
    const [selectedMickey, setSelectedMickey] = useState(1);

    const handleSelect = (id) => {
        console.log('selected mouse = ' + id);
        const selectedIndex = mickeyMouses.findIndex(
            (mouse) => mouse._id === id
        );
        console.log('selected index = ' + selectedIndex);
        setSelectedMickey(selectedIndex + 1);
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
