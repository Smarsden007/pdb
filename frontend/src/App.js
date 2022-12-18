import React from "react";
import { LoginPage } from "./components/LoginPage";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";






function App() {
  const PrivateRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return <>{isAuth ? <><Outlet/></> : <Navigate to="/" />}</>;
  };
  const RestrictedRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };
  return (
    <BrowserRouter>

    <Routes>
      
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/bookings" element={<Navbar />} />
      </Route>
      <Route element={<RestrictedRoutes />}>
        <Route path="/register" element={<Navbar />} />
        <Route path="/" element={<LoginPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
