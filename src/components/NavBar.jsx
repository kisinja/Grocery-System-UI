import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-3 px-[5%] bg-gray-300">
      <div>
        <h1>
          <img src={logo} alt="logo" className="w-8 h-8 inline" />
          <Link to="/" className="font-bold text-xl">
            Gro<span className="text-green-500 font-semibold text-lg">cery</span>
          </Link>
        </h1>
      </div>

      <div className="flex gap-[120px] items-center">
        <ul className="hidden sm:flex sm:items-center sm:gap-8">
          <li>
            <Link to="/" className="text-green-500 text-lg hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-500 text-lg hover:text-black">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-500 text-lg hover:text-black">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-500 text-lg hover:text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-500 text-lg hover:text-black">
              Blog
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex gap-2 items-center">
          <i className="fa-solid fa-heart text-lg text-gray-500"></i>
          <i className="fa-solid fa-shopping-cart text-lg text-gray-500"></i>
        </div>
        <div className="hidden sm:flex gap-3 items-center">
          <Link to="/about" className="text-gray-500 border border-gray-700 rounded py-2 px-5 hover:bg-white hover:border-none font-semibold">Login</Link>
          <Link to="/about" className="py-2 px-5 rounded text-white bg-green-500 hover:bg-green-700">Sign Up</Link>
        </div>
        <div className="absolute right-[5%] sm:hidden">
          <i className="fa-solid fa-bars text-lg font-bold"></i>
        </div>
      </div>
    </nav>
  )
}

export default NavBar