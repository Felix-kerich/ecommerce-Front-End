import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://127.0.0.1:8080/user/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  };

  const handleViewClick = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteClick = (id) => {
    axios.delete(`http://127.0.0.1:8080/user/${id}`)
      .then(() => {
        fetchUsers();  // Refresh the user list
        if (selectedUser && selectedUser.id === id) {
          setSelectedUser(null);  // Clear selected user if it was deleted
        }
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`https://robohash.org/${user.id}?set=set5`} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{user.firstName} {user.lastName}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => handleViewClick(user)}
                className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View
              </button>
              <button
                onClick={() => handleDeleteClick(user.id)}
                className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-bold">User Details</h2>
          <p><strong>First Name:</strong> {selectedUser.firstName}</p>
          <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
          <p><strong>Username:</strong> {selectedUser.userName}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
      )}
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        View all
      </a>
    </div>
  );
}
