import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }




  return (
    <div className="App">
      <header className='App-header'>
        <h2>Todo List App Redux</h2>

        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Enter a Todo'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 0,
              fontSize: 20
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
              border: 0
            }}
          >Go</button>
        </form>
        <ul>
          {todos &&
            todos.map((t) => (
              <li key={t.id} ><span>{t.todo}</span>
                <button
                  onClick={() => removeHandler(t)}
                  style={{
                    padding: 5

                  }}
                >x</button>
              </li>
            ))
          }


        </ul>

      </header>

    </div>
  );
}

export default App;
