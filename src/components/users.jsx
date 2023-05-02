import React, { useState } from 'react';

import api from '../API';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    }

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if ((number>4 && number<15) || lastOne === 1) return "человек тусанет";
        if ([2,3,4].indexOf(lastOne)>=0) return "человека тусанут"
       // if (lastOne === 1) return "человек тусанет"
        return "человек туcанет"
    }

    return ( 
        <>
            <h2>
                <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
                    {users.length > 0 
                    ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
                </span>
            </h2>
            {users.length !== 0 && 
        <table className="table">
            <thead>
                <tr>
                  <th scope="col">Имя</th>
                  <th scope="col">Качкства</th>
                  <th scope="col">Профессия</th>
                  <th scope="col">Встретился, раз</th>
                  <th scope="col">Оценка</th>
                  <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.qualities.map(qualitie => (
                            <span key={qualitie._id} className={`badge m-1 bg-${qualitie.color}`}>{qualitie.name}</span>))}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(user._id)}>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>}
        </>
     );
}
 
export default Users;