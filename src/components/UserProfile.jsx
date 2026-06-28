// components/UserProfile.jsx
import { userApi } from '../api/client';
import React, { useEffect, useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    userApi.get('/users/me')
      .then(
        res => {
            console.log("####", res);
            setUser(res.data);
          }
        )
      .catch(err => console.error(err));
  }, []);

  return <div>{user?.name}</div>;
}

