const MickeyImage = ({ selectedMickey }) => {
    const imageName = `/images/mickey_${selectedMickey}.jpg`;

    return <img className='mickey-image' src={imageName} alt='mickey image' />;
};
export default MickeyImage;
