import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = ['Home', 'Gallery', 'Sites', 'Locate', 'About']

  return (
    <div>
      <div className="navbar lg:px-40 lg:py-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navLinks.map((navLink) => <li key={navLink}><Link to={`/${navLink.toLocaleLowerCase()}`}>{navLink}</Link></li>)
              }
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">Authentication All</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navLinks.map((navLink) => <li key={navLink}><Link to={`/${navLink.toLocaleLowerCase()}`}>{navLink}</Link></li>)
            }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'} className="btn btn-outline btn-success text-black">Log In</Link>
          <Link to={'/register'} className="btn btn-outline btn-secondary ml-5  text-black">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;