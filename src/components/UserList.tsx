import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {UserState} from "../types/user";

const UserList: React.FC = () => {
    const {users, error, loading}:UserState = useTypesSelector(state => state.user)
    const {fetchUsers} = useAction();
    useEffect(
        () => {
            fetchUsers()
        }, []
    )

    if(loading) {
        return <h1>Идет загрузка ...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => <div>
                {user.name}
            </div>)}
        </div>
    );
};

export default UserList;