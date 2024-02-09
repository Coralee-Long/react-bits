import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {
  return (
    <ul className="menu menu-horizontal px-1">
    <details>
      <summary>Experiments</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </details>
    </ul>
  );
};

export default Dropdown;
