import SelectComp from './SelectComp';
import MickeyMap from './MickeyMap';
import { Stack } from '@mui/material';
import { useState } from 'react';
const MickeyDropdown = ({ mickeyMouses, onSelect }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleChange = (event) => {
        const selectedMickey = mickeyMouses.find(
            (mickey) => mickey._id === event
        );
        const location = {
            lat: parseFloat(selectedMickey.lat),
            lng: parseFloat(selectedMickey.lng),
        };
        // setSelected(event.target.value);
        setSelectedLocation(location);
        onSelect(event);
    };

    return (
        <Stack spacing={4} paddingTop={4} alignItems='center'>
            <SelectComp values={mickeyMouses} onChange={handleChange} />
            <MickeyMap
                mickeyMouses={mickeyMouses}
                selectedLocation={selectedLocation}
            />
        </Stack>
    );
};
export default MickeyDropdown;
