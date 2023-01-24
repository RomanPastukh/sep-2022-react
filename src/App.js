import React from 'react';
import {Count} from "./components/Count/Count";
import {Users} from "./users/Users";
import {User} from "./user/User";
import {SingleUser} from "./components/SingleUser/SingleUser";

const App = () => {
    return (
        <div>
            {/*<Count/>*/}
            <Users/>
            {/*<SingleUser/>*/}
        </div>
    );
};

export {App};