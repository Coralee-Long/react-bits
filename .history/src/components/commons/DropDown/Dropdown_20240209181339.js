import { Link } from 'react-router-dom';
import { useState } from 'react';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <span>Code Bits</span>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
