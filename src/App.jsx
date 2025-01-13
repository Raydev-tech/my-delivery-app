import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import Worker from "./Pages/Worker";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import ProfilePage from "./Pages/ProfilePage";
import CustomerDashboard from "./Pages/CustomerDashboard";
import CourierDashboard from "./Pages/CourierDashboard";
import UserNav from "./Components/UserNav";
import Notification from "./Pages/Notification";
import ShipNow from "./Pages/ShipNow";
import Oversea from "./Pages/OverSea";
import PersonalShopper from "./Pages/PersonalShopper";
import ProductPage from "./Pages/ProductPage";


function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/worker" element={<Worker />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
          <Route path="/courierdashboard" element={<CourierDashboard />} />
          <Route path="/usernav" element={<UserNav />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/shipnow" element={<ShipNow />} />
          <Route path="/oversea" element={<Oversea />} />
          <Route path="/personalshopper" element={<PersonalShopper />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster/>
    </div>
  )
}

export default App;