import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    if (Array.isArray(items)) {
        return (
            items.map((item) =>
                <li className={"list-group-item" + (item === selectedItem ? " active" : "")}
                    key={item._id}
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item.name}
                </li>
            ));
    }
    return (
        <ul className="list-group">
            {Object.keys(items).map(item =>
                <li className={"list-group-item" + (items[item] === selectedItem ? " active" : "")}
                    key={items[item][valueProperty]}
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item[contentProperty]}
                </li>)
            }
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
