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
import { Dashboard } from "./pages/Dashboard";
import { Bookings } from "./pages/Bookings";
import { Register } from "./pages/Register";
import { Calendar } from "./pages/Calendar";
import { Checkout } from "./clientPages/Checkout";
import { Homepage } from "./clientPages/Homepage";

function App() {
  const PrivateRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
      <>
        {isAuth ? (
          <>
            <Outlet />
          </>
        ) : (
          <Navigate to="/" />
        )}
      </>
    );
  };
  const RestrictedRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/calendar-view" element={<Calendar />} />
          <Route path="/register-user" element={<Register />} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path="/" element={<Checkout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Homepage/>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
