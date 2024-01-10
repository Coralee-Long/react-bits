import { Routes, Route } from 'react-router-dom';
import HomePage from '..HomePage.js/pages/HomePage';
import ContactPage from 'src/pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
export default AppRoutes;
