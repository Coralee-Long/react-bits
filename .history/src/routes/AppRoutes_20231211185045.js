import { Routes, Route } from 'react-router-dom';
import HomePage from '/src/pages/HomePage';
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