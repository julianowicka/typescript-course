import React from 'react';

interface IUserProps {
    name: string;
    email: string;
    roles: string[];
}

const User = ({ name, email, roles }: IUserProps) => {
    return (
        <li>
            {name} ({email}) [{roles.map((role: string) => role)}]
        </li>
    );
};

const UserList = () => {
    return (
        <ul>
            <User name={'Julia'} email={'julia.nowickaa@gmail.com'} roles={['admin']} />
        </ul>
    );
};
export default UserList;
