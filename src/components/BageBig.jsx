import React from "react";

const BageBig = ({userLength, renderPhrase}) => {
    return ( 
        <h2>
            <span className={"badge bg-" + (userLength > 0 ? "primary" : "danger")}>
                {userLength > 0 
                ? `${userLength} ${renderPhrase(userLength)} с тобой сегодня`
                : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
}
 
export default BageBig;