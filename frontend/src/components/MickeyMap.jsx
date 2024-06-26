import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import MickeyPin from './MickeyPin';

const MickeyMap = ({ mickeyMouses, selectedLocation }) => {
    const apiSKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <div
            style={{
                width: '50 vh',
                height: '50 vh',
            }}
        >
            <APIProvider apiKey={apiSKey} libraries={['marker']}>
                <Map
                    mapId={'62093adbc5394ed'}
                    style={{ width: '80vh', height: '50vh' }}
                    center={selectedLocation || { lat: 32.084, lng: 34.78205 }}
                    defaultZoom={14}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    {mickeyMouses.map((mickey) => {
                        return (
                            <AdvancedMarker
                                key={mickey._id}
                                position={{
                                    lat: parseFloat(mickey.lat),
                                    lng: parseFloat(mickey.lng),
                                }}
                            >
                                {/* <MickeyPin /> */}
                            </AdvancedMarker>
                        );
                    })}
                </Map>
            </APIProvider>
        </div>
    );
};
export default MickeyMap;
