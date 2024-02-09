import Dropdown from '../commons/DropDown/Dropdown';

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <details>
            <summary>Experiments</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 2</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};

export default NavBar;
