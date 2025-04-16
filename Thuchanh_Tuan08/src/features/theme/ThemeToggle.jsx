import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggle = () => {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
