import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CounterComponent from './features/counter/CounterComponent';
import TodoList from './features/todos/TodoList';
import ThemeToggle from './features/theme/ThemeToggle';
import Counter from './features/counter/Counter';
import './App.css'; // ✅ import CSS
import Cart from './features/cart/Cart';
import Auth from './features/auth/Auth';

function App() {
  const theme = useSelector(state => state.theme.mode);

  // Gán class cho <body> để áp dụng theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <h1>Redux Toolkit Practice</h1>
      <ThemeToggle />
      <hr />
      <h2>+, - useReducer</h2>
      <Counter></Counter>
      <hr />
      <CounterComponent />
      <hr />
      <TodoList />
      <hr />
      <Cart />    
      <hr />
      <Auth />
    </div>
  );
}

export default App;
