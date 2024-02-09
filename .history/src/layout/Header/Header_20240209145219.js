import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ChatGptPage from '../../pages/ChatGptPage';
import ComparatorPage from '../../pages/ComparatorPage';
import ContactPage from '../../pages/ContactPage';
import TailwindCheatsheetPage from '../../pages/TailwindCheatsheetPage';
import VideoGeneratorPage from '../../pages/VideoGeneratorPage';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">ChatGptPage</Link>
        


      </nav>
    </header>
  );
};
export default Header;
