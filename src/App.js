import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import CustomerCare from "./pages/CustomerCare";
import DentalCare from "./pages/DentalCare";
import OperationCare from "./pages/OperationCare";
import User from "./pages/User";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Route>

        <Route path="/contact" element={<Contact />}>
          <Route path="customer-care" element={<CustomerCare />} />
          <Route path="dental-care" element={<DentalCare />} />
          <Route path="operation-care" element={<OperationCare />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
