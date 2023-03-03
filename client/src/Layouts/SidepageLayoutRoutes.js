import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, withRouter } from 'react-router-dom';
import { Sidepage, Footer } from "../components";

const SidepageLayoutRoutes = () => {

    return(
        <>
           <Routes>
               <Route path="/*" element={<Sidepage/>}/>

           </Routes>
           <Footer/>
        
        </>
    )
};

export default SidepageLayoutRoutes;