import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ChatGptPage from "../../pages/"

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
