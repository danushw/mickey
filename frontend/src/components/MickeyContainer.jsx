import { useState } from 'react';
import MickeyDropdown from './MickeyDropdown';
import MickeyImage from './MickeyImage';
import { Stack } from '@mui/material';

const MouseContainer = ({ mickeyMouses }) => {
    const [selectedMickey, setSelectedMickey] = useState(1);

    const handleSelect = (id) => {
        const selectedIndex = mickeyMouses.findIndex(
            (mouse) => mouse._id === id
        );

        setSelectedMickey(selectedIndex + 1);
    };

    return (
        <Stack
            direction='row'
            spacing={20}
            justifyContent='space-between'
            alignItems='center'
            width='90%'
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
