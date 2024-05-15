import { useState } from 'react';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import SelectComp from './SelectComp';

const MickeyDropdown = ({ mickeyMouses, onSelect }) => {
    const [selected, setSelected] = useState(0);

    const handleChange = (event) => {
        console.log(event.target);
        // setSelected(event.target.value);
        onSelect(event);
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
            <SelectComp values={mickeyMouses} onChange={handleChange} />
            {/* <BasicSelect
                values={mickeyMouses}
                onSelect={onSelect}
                title='Name'
            /> */}
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
