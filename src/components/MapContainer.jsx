import React from 'react';
import { studentsData } from '../data/studentsData';
import {
	GoogleMap,
	LoadScript,
	MarkerF,
	InfoWindow,
} from '@react-google-maps/api';

export const MapContainer = () => {
	const [infoWindowOpen, setInfoWindowOpen] = React.useState(false);

	const showWindow = () => {
		setInfoWindowOpen(true);

	};
	const closeWindow = () => {
		
		setInfoWindowOpen(false);
	};
  
	const mapStyles = {
		height: '50vh',
		width: '50%',
		marginLeft: '100px',
	};

	const defaultCenter = {
		lat: 38.722,
		lng: -9.139,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs">
			<GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>


				{studentsData.map((student) => {
          
					return (
						<MarkerF
            key={student.id}
           
							position={student.homeAddress}
							onClick={() => showWindow()}
						>
				{infoWindowOpen && (
					<InfoWindow onCloseClick={(e) => closeWindow(e)}>
						<p>{student.name} {student.phone} {student.isAvailable ? <p>Let's Do something!</p> : null }</p>
						{/* <p>{student.phone}</p> */}
						{/*  */}
					</InfoWindow>
				)}
        </MarkerF>
					);
				})}

			</GoogleMap>
		</LoadScript>
	);
};
