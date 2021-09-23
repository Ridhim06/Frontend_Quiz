import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import env from "react-dotenv";


function App() {
  return (
    <BrowserRouter >
      <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <NavLink exact to={`/teacher`}>
          <button style={{ backgroundColor: "cyan", width: "7rem", height: "4rem" }}>Teacher</button>

        </NavLink>


        {/* <button style={{backgroundColor:"cyan",width:"7rem",height:"4rem"}}>Teacher</button> */}
        {/* <button style={{backgroundColor:"cyan",width:"7rem",height:"4rem"}}>Student</button> */}

        <NavLink exact to={`/student`}>
          <button style={{ backgroundColor: "cyan", width: "7rem", height: "4rem" }}>Student</button>
        </NavLink>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Switch>


        <Route path="/student" component={Student} />
        <Route path="/teacher" component={Teacher} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
