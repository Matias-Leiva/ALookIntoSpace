import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

import Home from '../pages/Home/Home';
import Rovers from '../pages/Rovers/Rovers';

function AppRouter() {
  return (
    <Layout>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rovers" element={<Rovers />} />
          <Route component={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default AppRouter;
