import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {
  return (
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <ul className="absolute z-10 left-0 w-48 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
    {pages.map((page) => (
      <li key={page.name} className="border-b last:border-0">
        <Link
          to={page.path}
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          {page.name}
        </Link>
      </li>
    ))}
  </ul>

  
      <a class="flex-none text-xl font-semibold dark:text-white" href="#">
        Demo
      </a>
      <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
        <Link
          class="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          aria-current="page"
        >
          Landing
        </Link>
      </div>
    </nav>
  );
};

