import React from "react";
import PropTypes from "prop-types";

import Qualitie from "./qualitie";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualitie) => (
                <Qualitie
                    color={qualitie.color}
                    name={qualitie.name}
                    key={qualitie._id}
                />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
