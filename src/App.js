import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import RequestComponent from './components/views/RequestComponent';
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/request" element={<RequestComponent />}></Route>
    </Routes>

  );
}

export default App;