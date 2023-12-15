import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '././assets/Custom.css';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Project from './pages/Project';
import Testimonial from './pages/Testimonial';
import { ConfigProvider } from 'antd';

function Layout() {
  return (
    <ConfigProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Service />} />
            <Route path='project' element={<Project />} />
            <Route path='testimonial' element={<Testimonial />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default Layout;
