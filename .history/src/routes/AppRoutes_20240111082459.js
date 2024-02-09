import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import ContactPage from '../pages/ContactPage';
import TaiwindCheatsheetPage from '../pages/TailwindCheatsheetPage.js';
import VideoGeneratorPage from '../pages/VideoGeneratorPage.js';
import ChatGptPage from '../pages/ChatGptPage.js';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tailwind-cheatsheet" element={<TaiwindCheatsheetPage />} />
      <Route path="/video" element={<VideoGeneratorPage />} />
      <Route path="/chatgpt" element={<ChatGptPage />} />
    </Routes>
  );
};

export default AppRoutes;
