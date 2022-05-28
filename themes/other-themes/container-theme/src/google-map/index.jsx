/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { GoogleMap } from "gatsby-theme-ui";

const GoogleMapArea = ({ data }) => <GoogleMap lat={data.lat} lng={data.lng} />;

GoogleMapArea.propTypes = {
    data: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
};

export default GoogleMapArea;
