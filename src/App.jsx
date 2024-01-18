import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';
import { testOne } from './store/newInput';
import { testReadOne } from './store/testRead';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import NewTestList from './components/NewTestList';
import TestReadForm from './components/TestReadForm';
import TestReadList from './components/TestReadList';

import './App.css';
import NewInputTest from './components/NewInputTest';


function App() {


  const [users, setUsers] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [tex, setTex] = useState('');
  const [textRead, setTextRead] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }
  const textText = () => {
    if(tex.trim().length) {
      dispatch(testOne({tex}));
      setTex('');
    }
  }
  const TextRead = () => {
    if(textRead.trim().length) {
      dispatch(testReadOne({textRead}));
      setTextRead('');
    }
  }

  const remDel = () => {
    alert('tetst')
  }

  useEffect(() => {
    fetch('https://reqres.in/api/users').then((res) => res.json()).then((json) => { setUsers(json.data) })
      .catch((err) => {
        console.warn(err);
        alert('ошибка')
      })
      // .finally(() => { setLoading(false) })
  }, [])
  

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
      <NewInputTest value={tex}
      newText={setTex}
      textText={textText}
      />
      <NewTestList/>

      <TestReadForm  remDel={remDel} TextRead={TextRead} value={textRead} setTextRead={setTextRead}/>
      <TestReadList/>

      {users.map((user) =>
  
  <li>{user.id}
  {user.email}</li>
)}

    </div>
  );
}

export default App;
