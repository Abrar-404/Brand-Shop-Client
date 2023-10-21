import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';
import '../Dark and Light/darkLight.css';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(result => {
        navigate('/');
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-white -mr-[2%]">
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? null : (
        <>
          <li className="text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li className="text-white"></li>
          <li className="text-white">
            <NavLink to="/addcar">Add Product</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/addedproducts">My Added Products</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-[120px] h-[40px]" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="text-white mr-10 text-3xl">
            <NavLink to="/cart">
              <BsCart3></BsCart3>
            </NavLink>
          </div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn text-base mb-2 btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary border-none text-xs text-white bg-[#5616C5]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
