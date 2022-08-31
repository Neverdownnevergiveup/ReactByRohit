import React from 'react'
const users = [
    { name: "Rohit1 singh" },
    { name: "Rohit2 singh" },
    { name: "Rohit3 singh" }
];
const useritem = users.map((user) =>
    <li key={user.id}>{user.name}</li>);


export default function DisplayArr() {
    return (
        <>
            <div className="disarr">
                <h3>user name</h3>
                <ul>{useritem}</ul>
            </div>
        </>
    )
}
