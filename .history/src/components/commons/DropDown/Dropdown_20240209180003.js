import { Link } from 'react-router-dom';
import { useState } from 'react';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Link</a></li> */}
      <li>
        <details>
          <summary onClick={toggle}>Experiments</summary>
          <ul className="p-3 bg-base-100 rounded-t-none right-0">
            {pages.map((page) => (
              <li key={page.name} className="pe-16">
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Dropdown;
