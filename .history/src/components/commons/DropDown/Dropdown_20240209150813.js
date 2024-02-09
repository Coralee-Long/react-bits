import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleList = () => setOpen((prev) => !prev);

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
