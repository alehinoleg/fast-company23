import React from "react";
import PropTypes from "prop-types";

const BageBig = ({ userLength }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if ((number > 4 && number < 15) || lastOne === 1) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        // if (lastOne === 1) return "человек тусанет"
        return "человек туcанет";
    };
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
    userLength: PropTypes.number.isRequired
};

export default BageBig;
