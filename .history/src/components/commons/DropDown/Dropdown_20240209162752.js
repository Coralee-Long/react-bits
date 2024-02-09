import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}><p></p></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
