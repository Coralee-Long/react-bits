import { Link } from 'react-router-dom';
import { useState } from 'react';
import pages from '../../../utils/pagesRegistry';

const Dropdown = () => {
    const [toggle, setTog]
  return (
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Link</a></li> */}
      <li>
        <details>
          <summary>Experiments</summary>
          <ul className="p-3 bg-base-100 rounded-t-none right-0">
            {pages.map((page) => (
              <li key={page.name} className="pe-16">
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
