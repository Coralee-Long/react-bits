import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ChatGptPage from '../../pages/ChatGptPage';
import ComparatorPage from '../../pages/ComparatorPage';
import ContactPage from '../../pages/ContactPage';
import ChatGptPage from '../../pages/ChatGptPage';
import VideoPage from '../../pages/VideoPage';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};
export default Header;
