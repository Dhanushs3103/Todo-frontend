//packages
import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//local imports
import Home from '../pages/Home.jsx'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Todos from "../pages/Todos.jsx"
import PrivateRoute from "./PrivateRoute.jsx"
import NotFoundPage from '../pages/NotFoundPage.jsx'


function PagesRoutes() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname.match(/\/{2,}/)) {
        navigate(location.pathname.replace(/\/{2,}/g, "/"), { replace: true });
      }
    }, [location, navigate]);
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/todos"  element={<PrivateRoute><Todos /></PrivateRoute>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default PagesRoutes
