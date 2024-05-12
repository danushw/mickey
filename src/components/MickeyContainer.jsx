import { useState } from 'react';
import MickeyDropdown from './MickeyDropdown';
import MickeyImage from './MickeyImage';

const MouseContainer = ({ mickeyMouses }) => {
    const [selectedMickey, setSelectedMickey] = useState(mickeyMouses[0].id);

    const handleSelect = (id) => {
        console.log('selected mouse = ' + id);
        setSelectedMickey(id);
    };

    return (
        <div className='mouse-info'>
            <div className='drop-down-menu'>
                <MickeyDropdown
                    mickeyMouses={mickeyMouses}
                    onSelect={handleSelect}
                />
            </div>
            <div className='mouse-image'>
                <MickeyImage
                    selectedMickey={selectedMickey}
                    mickeyMouses={mickeyMouses}
                />
            </div>
        </div>
    );
};

export default MouseContainer;
