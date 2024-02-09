import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ChatGptPage from '../../pages/ChatGptPage';
import Comp from '../../pages/Comp';

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
