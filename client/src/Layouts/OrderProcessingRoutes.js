import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar2 from '../components/OrderProcesing/Navbar2';
import Footer2 from '../components/OrderProcesing/Footer2';
import StartUpPage from '../components/OrderProcesing/ControlBoard/StartUpPage'; //Controlboard
import ClientPage from '../components/OrderProcesing/ClientRetrievalPage/ClientPage';
import MainPage from '../components/OrderProcesing/CreatorRetrievalPage/MainPage';
import StartPage from '../components/OrderProcesing/StartPage';


const OrderProcessingRoutes = () => {
  return (
    <>
      <Navbar2/>
      <Routes>
        <Route path="*" element={<StartPage/>}/>
        <Route path="/pichub" element={<ClientPage/>}/>
        <Route path="/creatorhub" element={<MainPage/>}/>
        <Route path="/32f32adminiklajsdda901jnkjh2" element={<StartUpPage/>}/>
      </Routes>
      <Footer2/>
    </>
  )
}

export default OrderProcessingRoutes;