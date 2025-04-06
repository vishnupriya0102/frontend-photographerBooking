import React from 'react';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Photographer from '../pages/Photographer/Photographer';
import PhotographerDetails from '../pages/Photographer/PhotographerDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/Photographer-account/Dashboard';
import CheckoutSuccess from '../pages/CheckoutSuccess';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/photographer" element={<Photographer />} />
    <Route path="/photographer/:id" element={<PhotographerDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Service />} />
    <Route path="/checkout-success" element={<CheckoutSuccess />} />
    <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['customer']}><MyAccount /></ProtectedRoute>} />
    <Route path="/photographers/profile/me" element={<ProtectedRoute allowedRoles={['photographer']}><Dashboard /></ProtectedRoute>} />


    
  </Routes>
}

export default Router
