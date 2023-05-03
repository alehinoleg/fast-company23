import React from "react";
import PropTypes from "prop-types";

const BageBig = ({ userLength, renderPhrase }) => {
    return (
        <h2>
            <span
                className={
                    "badge bg-" + (userLength > 0 ? "primary" : "danger")
                }
            >
                {userLength > 0
                    ? `${userLength} ${renderPhrase(
                        userLength
                    )} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

BageBig.propTypes = {
    userLength: PropTypes.number.isRequired,
    renderPhrase: PropTypes.func.isRequired
};

export default BageBig;
