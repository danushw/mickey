import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from '@vis.gl/react-google-maps';
// const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const MickeyMap = ({ mickeyMouses }) => {
    return (
        <div
            style={{
                width: '50 vh',
                height: '50 vh',
            }}
        >
            <APIProvider
                apiKey='AIzaSyD5ItELwp3G7ObF8Pjy65fky9dmnwXHiGQ'
                libraries={['marker']}
            >
                <Map
                    mapId={'62093adbc5394ed'}
                    style={{ width: '80vh', height: '50vh' }}
                    defaultCenter={{ lat: 32.08371, lng: 34.78205 }}
                    defaultZoom={14}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    {mickeyMouses.map((mickey) => {
                        return (
                            <AdvancedMarker
                                key={mickey._id}
                                position={{
                                    lat: parseFloat(mickey.geolocation.lat),
                                    lng: parseFloat(mickey.geolocation.lng),
                                }}
                            ></AdvancedMarker>
                        );
                    })}
                    {/* <AdvancedMarker
                        position={{
                            lat: location2.lat,
                            lng: location2.lng,
                        }}
                    >
                        <Pin />
                    </AdvancedMarker> */}
                </Map>
            </APIProvider>
        </div>
    );
};
export default MickeyMap;
