import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import RequestComponent from './components/views/RequestComponent';
import DeliveryComponent from './components/views/DeliveryComponent'
import Nav from './components/ReusableComponents/Nav';
import RequestTransferComponent from './components/views/RequestTransferComponent'
import DetailsComponent from './components/views/DetailsComponent';
import PageTransferComponent from './components/views/PageTransferComponent';
import ConfirmDeliveryComponent from './components/views/ConfirmDeliveryComponent';
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/nav" element={<Nav />}></Route>
      <Route exact path="/request" element={<RequestComponent />}></Route>
      <Route exact path="/delivery" element={<DeliveryComponent />}></Route>
      <Route exact path="/transfer" element={<RequestTransferComponent />}></Route>
      <Route exact path="/details" element={<DetailsComponent />}></Route>
      <Route exact path="/pagetransfer" element={<PageTransferComponent />}></Route>
      <Route exact path="/confirmdelivery" element={<ConfirmDeliveryComponent />}></Route>

    </Routes>

  );
}

export default App;