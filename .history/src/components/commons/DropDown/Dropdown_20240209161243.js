import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {


  return (
    <div className="drop-down">
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
