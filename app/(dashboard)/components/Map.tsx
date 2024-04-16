import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { GiPositionMarker } from "react-icons/gi";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactDOMServer from "react-dom/server";

// Function to create a SVG marker icon
const createSvgIcon = () => {
	// Create an instance of GiPositionMarker with default props
	const svgElement = React.createElement(GiPositionMarker, {
		color: "red", // you can set the color
		size: "4em", // and the size of the icon
	});
	return ReactDOMServer.renderToString(svgElement);
};

const customIcon = new L.DivIcon({
	html: `<div style="transform: translateY(-100%);">${createSvgIcon()}</div>`, // Use the SVG icon in HTML
	className: "leaflet-div-icon", // Custom class for additional styling
});

const Map = () => {
	return (
		<MapContainer
			center={[50.02417385685403, 21.939069360917166]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker
				position={[50.02417385685403, 21.939069360917166]}
				icon={customIcon}>
				<Tooltip>Kielanówka 35B/8, 35-106 Kielanówka</Tooltip>
			</Marker>
		</MapContainer>
	);
};

export default Map;
