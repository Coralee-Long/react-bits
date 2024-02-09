import Dropdown from '../commons/DropDown/Dropdown';

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Code Bits</a>
        </div>
        <Dropdown />

        <div className="navbar-center"></div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default NavBar;
