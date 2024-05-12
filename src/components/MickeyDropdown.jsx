import { useState } from 'react';

const MickeyDropdown = ({ mickeyMouses, onSelect }) => {
    const [selected, setSelected] = useState(mickeyMouses[0].id);

    const handleChange = (event) => {
        setSelected(event.target.value);
        onSelect(event.target.value);
    };
    return (
        <select value={selected} onChange={handleChange}>
            {mickeyMouses.map((mickey) => (
                <option key={mickey.id} value={mickey.id}>
                    {mickey.name}
                </option>
            ))}
        </select>
    );
};
export default MickeyDropdown;
