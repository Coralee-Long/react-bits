
import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {

  return (
             <details>
     
      <ul className="menu menu-horizontal px-1">
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Dropdown;
