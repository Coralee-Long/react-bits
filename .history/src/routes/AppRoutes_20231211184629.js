import { Routes, Route } from 'react-router-dom';
import HomePage from '/';
import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
export default AppRoutes;
