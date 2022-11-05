// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Login from './components/Login/Login';
import UserBoardComponent from './components/UserComponent/UserBoardComponent';
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/UserBoard" element={<UserBoardComponent />}></Route>
    </Routes>

  );
}

export default App;