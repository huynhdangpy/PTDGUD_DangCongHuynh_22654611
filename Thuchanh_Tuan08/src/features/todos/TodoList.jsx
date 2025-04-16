import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h2>To-do List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
            <button
              style={{ marginLeft: '10px' }}
              onClick={(e) => {
                e.stopPropagation(); // tránh gọi toggle khi xoá
                dispatch(removeTodo(todo.id));
              }}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
