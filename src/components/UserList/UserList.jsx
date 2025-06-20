import UserProfileCard from "../UserProfileCard/UserProfileCard";




function UserList() {

const users = [
    {id: 1, name: 'Bill', email: 'bill@microsoft.com'},
    {id: 2, name: 'Steve', email: 'steve@apple.com'},
    {id: 3, name: 'Elon', email: 'elon@tesla.com'},
    {id: 4, name: 'Mark', email: 'mark@facebook.com'},
];
;
    const userElements = users.map((user) => <UserProfileCard user={user}/>)
    return (
        <div>
            <h2>User list</h2>
            <ul>
                {users.map((user) => (
                    <li>
                        <UserProfileCard user={user}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList