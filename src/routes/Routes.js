import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

import Home from '../pages/Home/Home';

function AppRouter() {
  return (
    <Layout>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default AppRouter;
