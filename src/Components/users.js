import React, { useState } from 'react';
import './Users.css';
import axios from 'axios';

function Users() {
  const [data, setData] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
  };

  return (
    <div className='users'>
      <h1 className='title'>User List</h1>
      <button className='fetch-button' onClick={fetchUser}>
        Get Users
      </button>

      <div className='user-list'>
        {data.map((user) => (
          <div key={user.id} className='user-card'>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
