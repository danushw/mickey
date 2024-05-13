import { useState } from 'react';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import SelectComp from './SelectComp';
const MickeyDropdown = ({ mickeyMouses, onSelect }) => {
    const [selected, setSelected] = useState(mickeyMouses[0].id);

    const handleChange = (event) => {
        setSelected(event.target.value);
        onSelect(event.target.value);
    };
    return (
        <>
            {/* <Select defaultValue={mickeyMouses[0]}>
                {mickeyMouses.map((mickey) => (
                    <Option key={mickey.id} value={mickey.id}>
                        {mickey.name}
                    </Option>
                ))}
            </Select> */}
            <SelectComp values={mickeyMouses} onChange={onSelect} />
        </>
    );
};
export default MickeyDropdown;

{
    /* <select value={selected} onChange={handleChange}>
{mickeyMouses.map((mickey) => (
    <option key={mickey.id} value={mickey.id}>
        {mickey.name}
    </option>
))}
</select> */
}
