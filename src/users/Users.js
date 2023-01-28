import React, {useEffect, useState} from 'react';
import {User} from "../user/User";

import {userService} from "../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);

    const [userDetails,setUserDetails] = useState(null);

    useEffect(()=> {
      userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },['count']);

    return (
        <div>
            <h1>UserDetails:</h1>
            {userDetails && <User user={userDetails}/> }
            <hr/>
            <h1>Users:</h1>

            {users.map(user=> <User key={user.id} user={user} setUserDetails={setUserDetails} />)}
        </div>
    );
};

export {Users};