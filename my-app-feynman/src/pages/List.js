import React from "react";


function UserList() {
    const users = [
        { email: 'user1@gmail.com', name: 'name1', tel: '010-123-4567' },
        { email: 'user2@gmail.com', name: 'name2', tel: '010-123-4567' },
        { email: 'user3@gmail.com', name: 'name3', tel: '010-123-4567' },
        { email: 'user4@gmail.com', name: 'name4', tel: '010-123-4567' },
        { email: 'user5@gmail.com', name: 'name5', tel: '010-123-4567' }
    ]

    return (
        <table border="1" cellPadding="5" cellSpacing="0" >
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>전화</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User u={user} />)}
            </tbody>
        </table>
    )
}

function User({ u }) {
    return (
        <tr>
            <td> {u.name}</td>
            <td> {u.email}</td>
            <td> {u.tel} </td>
        </tr>
    )
}
export default UserList;

