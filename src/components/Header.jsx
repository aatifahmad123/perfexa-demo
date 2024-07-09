import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const togglemenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="py-6 px-4 bg-slate-100 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl bg-slate-700 text-white p-3 rounded-lg">
            <NavLink to="/">Perfexa Advisors LLP</NavLink>
          </h1>

          <div className="md:hidden p-2 bg-gray-200">
            <FaBars onClick={togglemenu}></FaBars>
          </div>

          <ul className="hidden md:flex space-x-12">
            <li>
              <NavLink to="/about" className=" text-slate-700 hover:text-white hover:bg-slate-700 p-2 rounded-lg">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-slate-700 hover:bg-slate-700 hover:text-white p-2 rounded-lg">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className=" text-slate-700 hover:bg-slate-700 hover:text-white p-2 rounded-lg">
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink to="/knowledge" className=" text-slate-700 hover:bg-slate-700 hover:text-white p-2 rounded-lg">
                KNOWLEDGE CENTER
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect" className=" text-slate-700 hover:bg-slate-700 p-2 hover:text-white rounded-lg">
                CONNECT
              </NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
      {isMenuOpen ? (
          <ul className="flex-col md:hidden space-y-3 px-4 pb-2 bg-slate-100">
            <li>
              <NavLink to="/about" className="text-slate-700">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-slate-700">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="text-slate-700">
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink to="/knowledge" className="text-slate-700">
                KNOWLEDGE CENTER
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect" className="text-slate-700">
                CONNECT
              </NavLink>
            </li>
          </ul>
        ) : null}
    </>
  );
};
export default Header;
