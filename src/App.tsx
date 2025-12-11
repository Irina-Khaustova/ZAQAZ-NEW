import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Authorization from './pages/authorization';
import { initialState, authReducer } from './pages/authorization/reducers/authorizationReduser';

function App() {

  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log(state)

  return (
    <div className="App">
      <Authorization state={state}></Authorization>
    </div>
  );
}

export default App;
