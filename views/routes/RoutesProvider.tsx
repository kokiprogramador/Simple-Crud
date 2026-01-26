import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EditForm from "../pages/EditForm";

export const RoutesProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editform/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
};

export default RoutesProvider;
