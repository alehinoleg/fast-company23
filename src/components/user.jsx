import React from "react";
import PropTypes from "prop-types";

import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, handleDelete, handleBookmark }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((qualitie) => (
                    <Qualitie
                        color={qualitie.color}
                        name={qualitie.name}
                        key={qualitie._id}
                    />
                ))}
            </td>

            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td
                onClick={() => {
                    handleBookmark(user._id);
                }}
            >
                <Bookmark bookmark={user.bookmark} />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default User;
