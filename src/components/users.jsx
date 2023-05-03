import React, { useState } from "react";
import PropTypes from "prop-types";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginat";

const Users = ({
    userLength,
    handleDelete,
    users: allUsers,
    handleBookmark
}) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const users = paginate(allUsers, currentPage, pageSize);

    return (
        <>
            {userLength !== 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качкства</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                                handleDelete={handleDelete}
                                handleBookmark={handleBookmark}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={userLength}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};

Users.propTypes = {
    userLength: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default Users;
