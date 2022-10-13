import { useMemo, useState } from 'react';
import {
	GoogleMap,
	useLoadScript,
	MarkerF,
	InfoWindow,
} from '@react-google-maps/api';
import './Map-style.css';
import { studentsData } from '../data';

function Home() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs',
	});

	if (!isLoaded) return <div>Loading...</div>;
	return <Map />;
}

function Map() {
	const center = useMemo(() => ({ lat: 38, lng: -9 }), []);
	const [markerData, setMarkerData] = useState({});

	function markerClicked(student) {
		let { isClicked } = student;
		if (isClicked === false) {
			setMarkerData({
				...student,
				isClicked: true,
			});
		} else if (isClicked === true) {
			setMarkerData({
				...student,
				isClicked: false,
			});
		}

	
	}



	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			{studentsData.map((student) => {
				return (
					<MarkerF
						key={student.id}
						position={student.homeAddress}
						onClick={() => markerClicked(student)}
					>
					<InfoWindow position={student.homeAddress}><div>hi</div></InfoWindow>
					</MarkerF>
				);
			})}
		</GoogleMap>
	);
}

export default Home;
