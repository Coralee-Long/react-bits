import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import ContactPage from '../pages/ContactPage';
import TaiwindCheatsheet from '../pages/TailwindCheatsheet.js';
import { VideoGenerator } from '../pages/VideoGenerator.js';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tailwind-cheatsheet" element={<TaiwindCheatsheet />} />{' '}
      <Route path="/video" element={<TaiwindCheatsheet />} />
    </Routes>
  );
};
export default AppRoutes;
