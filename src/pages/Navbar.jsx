import Logo from "../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuItems = useMemo(
    () => [
      {
        key: "/",
        label: "Home",
        path: "/",
      },
      {
        key: "/store",
        label: "Store",
        path: "/store",
      },
      {
        key: "/blog",
        label: "Blog",
        path: "/blog",
      },
      {
        key: "/about-us",
        label: "About Us",
        path: "/about-us",
      },
      {
        key: "/contact-us",
        label: "Contact Us",
        path: "/contact-us",
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container max-width p-4 px-10">
      <div className="flex justify-between items-center">
        
        
        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:bg-gray-700 rounded"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="fixed right-0 top-0 h-full w-64 shadow-lg z-50 bg-purple-800">
                <div className="p-4 ">
                  <button
                    onClick={toggleMenu}
                    className="float-right p-2 hover:bg-rose-500 rounded"
                  >
                    ✕
                  </button>
                </div>
                <ul className="p-4">
                  {menuItems.map((item) => (
                    <li key={item.key} className="mb-4">
                      <Link
                        to={item.path}
                        className="block p-2 hover:bg-gray-100 rounded"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
