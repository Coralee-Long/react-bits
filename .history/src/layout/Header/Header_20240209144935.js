import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';


const Header = () => {
  return (
    <header>
      <nav>
      <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};
export default Header;
