import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginPage";
import TraningSessionPage from "../Pages/TraningSessionPage/TraningSessionPage";
import HomePage from "../Pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TraningSession" element={<TraningSessionPage />} />
        <Route path="/Dashboard" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
