import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import RequestComponent from './components/views/RequestComponent';
import DeliveryComponent from './components/views/DeliveryComponent'
import Nav from './components/ReusableComponents/Nav';
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/nav" element={<Nav />}></Route>
      <Route exact path="/request" element={<RequestComponent />}></Route>
      <Route exact path="/delivery" element={<DeliveryComponent />}></Route>
    </Routes>

  );
}

export default App;