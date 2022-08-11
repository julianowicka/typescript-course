import React from 'react';

interface IUserProps {
    name: string;
    email: string;
    roles?: string[];
}

const User = ({ roles = [], ...props }: IUserProps) => {
    return (
        <li>
            {props.name} ({props.email}) [{roles.map((role: string) => role)}]
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
