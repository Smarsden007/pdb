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
import { HomePage } from "./clientPages/HomePage2";
import Logo from "./clientComps/LogoRender";
import { NavBar } from "./clientComps/NavBar";
import { DeskNavBar } from "./clientComps/DeskNavBar";
import Footer from "./clientComps/Footer";
import { SubHero } from "./clientComps/SubHero";
import { Rentals } from "./clientPages/Rentals";

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
          <Route
            path="/checkout"
            element={
              <div>
                <NavBar />
                <div className="hidden lg:block">
                  <DeskNavBar />
                </div>
                <Checkout className="" />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <div className="hidden lg:block ">
                  <DeskNavBar />
                </div>
                <HomePage />
                <SubHero className="" />
                <Footer />
              </div>
            }
          />{" "}
          <Route path="/rentals"  element={
              <div>
                <NavBar />
                <div className="hidden lg:block ">
                  <DeskNavBar />
                </div>
                <Rentals />
                <Footer />
              </div>
            } />
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
