import { Link } from 'react-router-dom';
import pages from '../../../utils/pagesRegistry';

export const Dropdown = () => {
  console.log(pages);
  return (
    <div className="dropdown">
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={#}>{page.name}</Link>
            {/* <p>{page.name}</p>
            <p>{page.path}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
