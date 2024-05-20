import SelectComp from './SelectComp';
import MickeyMap from './MickeyMap';
import { Stack } from '@mui/material';
const MickeyDropdown = ({ mickeyMouses, onSelect }) => {
    const handleChange = (event) => {
        console.log(event.target);
        // setSelected(event.target.value);
        onSelect(event);
    };

    return (
        <Stack spacing={4} paddingTop={4} alignItems='center'>
            <SelectComp values={mickeyMouses} onChange={handleChange} />
            <MickeyMap mickeyMouses={mickeyMouses} />
        </Stack>
    );
};
export default MickeyDropdown;
