/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    // GoogleMap as GoogleMapComponent,
    useJsApiLoader,
    // Marker as MarkerComponent,
} from "@react-google-maps/api";
import { MapKey } from "@boseo/shared/data/api-keys";
import loadable from "@loadable/component";
import { StyledMap } from "./style";

const GoogleMapComponent = loadable(() => import("@react-google-maps/api"), {
    resolveComponent: (components) => components.GoogleMap,
});
const MarkerComponent = loadable(() => import("@react-google-maps/api"), {
    resolveComponent: (components) => components.Marker,
});

const GoogleMap = ({ lat, lng, zoom, sx, className }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MapKey,
    });
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }
    return isLoaded ? (
        <StyledMap sx={sx} className={className}>
            <GoogleMapComponent
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{ lat, lng }}
                zoom={zoom}
            >
                <MarkerComponent position={{ lat, lng }} />
            </GoogleMapComponent>
        </StyledMap>
    ) : (
        <div>Map is loading.</div>
    );
};

GoogleMap.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

GoogleMap.defaultProps = {
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};

export default GoogleMap;
