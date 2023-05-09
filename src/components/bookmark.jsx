import React from "react";
import PropTypes from "prop-types";
// import { White, Black } from "./icon/icom";

const Bookmark = ({ bookmark, handleBookmark, userId }) => {
    /* return <div>{bookmark ? White : Black}</div>; */
    return (
        <div>
            {bookmark && (
                <svg
                    onClick={() => handleBookmark(userId)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-heart-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
            )}

            {!bookmark && (
                <svg
                    onClick={() => handleBookmark(userId)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
            )}
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default Bookmark;
