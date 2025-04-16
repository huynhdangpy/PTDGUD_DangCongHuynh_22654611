import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

const Auth = () => {
  const [username, setUsername] = useState('');
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login({ username }));
      setUsername('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>🔐 Auth - Đăng Nhập</h2>
      {isLoggedIn ? (
        <div>
          <p>👋 Xin chào, <strong>{user.username}</strong>!</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            placeholder="Nhập tên đăng nhập"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
