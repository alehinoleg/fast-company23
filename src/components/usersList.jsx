import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import UsersTable from "./usersTable";
import Pagination from "./pagination";
import { paginate } from "../utils/paginat";
import GroupList from "./groupList";
import api from "../API";
import BageBig from "./BageBig";

const UsersList = () => {
    const [users, setUsers] = useState();
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(api.professions.fetchAll());
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleBookmark = (id) => {
        setUsers(users.filter(user => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
                return user;
            }
            return user;
        }));
    };

    useEffect(() => {
        api.professions.fetchAll().then(data => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handelSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const userLength = users.length;
        const filteredUsers = selectedProf
            ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="d-flex">
                {Object.keys(professions).length !== 0 && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            selectedItem={selectedProf}
                        />
                        <button className="btn btn-secondary mt-2" onClick={clearFilter}>Очистить</button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <BageBig userLength={count} />
                    {userLength !== 0 && (
                        <UsersTable users={usersCrop}
                            handleDelete={handleDelete}
                            handleBookmark={handleBookmark}
                            onSort={handelSort}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={userLength}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "////loading";
};

UsersList.propTypes = {
    handleDelete: PropTypes.array,
    users: PropTypes.array,
    handleBookmark: PropTypes.func
};

export default UsersList;
