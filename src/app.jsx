import React, { useState } from "react";

import api from "./API";

import BageBig from "./components/BageBig";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if ((number > 4 && number < 15) || lastOne === 1) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        // if (lastOne === 1) return "человек тусанет"
        return "человек туcанет";
    };
    const handleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                if (user.bookmark === false) {
                    user.bookmark = true;
                } else {
                    user.bookmark = false;
                }
            }
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <>
            <BageBig userLength={users.length} renderPhrase={renderPhrase} />
            <Users
                userLength={users.length}
                users={users}
                handleDelete={handleDelete}
                handleBookmark={handleBookmark}
            />
        </>
    );
};

export default App;
