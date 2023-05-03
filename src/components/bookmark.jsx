import React from "react";
import PropTypes from "prop-types";
import { White, Black } from "./icon/icom";

const Bookmark = ({ bookmark }) => {
    return <>{bookmark ? White : Black}</>;
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};

export default Bookmark;
