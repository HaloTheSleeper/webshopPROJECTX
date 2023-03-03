import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import ShopLayoutRoutes from './Layouts/ShopLayoutRoutes';
import SidepageLayoutRoutes from './Layouts/SidepageLayoutRoutes';
import OrderProcessingRoutes from './Layouts/OrderProcessingRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useStyles from './AppStyles/styles'


const App = () => {
  const classes = useStyles();

  return (
    <Router>
    <>
     <Routes>
      <Route path="*" element={<ShopLayoutRoutes/>} />
      <Route path="/sidepage" element={<SidepageLayoutRoutes/>} />
      <Route path="/orders/*" element={<OrderProcessingRoutes/>} />
     </Routes>
    </>
    </Router>
  )
};

export default App;