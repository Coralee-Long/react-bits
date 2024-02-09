import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Link</a></li> */}
      <li>
        <details>
          <summary>Experiments</summary>
          <ul className="p-3 bg-base-100 rounded-t-none pe-4 right-0">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Dropdown;
