import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {
  return (
    <>
      <div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          {pages.map((page) => (
            <li
              key={page.name}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
