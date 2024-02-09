import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import ContactPage from '../pages/ContactPage';
import TaiwindCheatsheetPage from '../pages/TailwindCheatsheetPage.js';
import VideoGeneratorPage from '../pages/VideoGeneratorPage.js';
import ChatGptPage from '../pages/ChatGptPage.js';
import ComparatorPage from '../pages/ComparatorPage.js';
import ContentfulPage from '../pages/ContentfulPage.js';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tailwind-cheatsheet" element={<TaiwindCheatsheetPage />} />
      <Route path="/video" element={<VideoGeneratorPage />} />
      <Route path="/chatgpt" element={<ChatGptPage />} />
      <Route path="/comparator" element={<ComparatorPage />} />
      <Route path="/contentful" element={<ContentfulPage />} />
    </Routes>
  );
};

export default AppRoutes;
