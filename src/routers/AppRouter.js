import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home           from '../pages/home';
import Login          from '../pages/auth/login';
import Register       from '../pages/auth/register';
import DoctorProfile  from '../pages/user/doctor-profile';
import Page404        from '../pages/page404';
import PatientList    from '../pages/patientList';
import DoctorList     from '../pages/user/doctor-list';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/user/doctor-profile" exact element={<DoctorProfile />} />
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/register" exact element={<Register />} />
        <Route path="/patientList" exact element={<PatientList />} />
        <Route path="/user/doctor-list" exact element={<DoctorList/>} />
        <Route path="*" exact element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
