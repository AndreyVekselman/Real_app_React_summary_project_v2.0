import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./context/auth.context";
import BackGroundTheme from "../services/backGraundTheme";

const Navbar = () => {
  const { theme, setTheme } = BackGroundTheme();
  const { user } = useAuth();

  const handleLightThemeOnClick = () => {
    setTheme("light");
  };
  const handDarkThemeOnClick = () => {
    setTheme("dark");
  };
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark  fs-5"
      aria-label="Fourth navbar example"
    >
      {user ? (
        <div className=" text-bg-dark p-3">
          Hello <i className="bi bi-person-check"></i>{" "}
        </div>
      ) : null}
      <div className="container">
        <Link className="navbar-brand" to="/">
          Real <i className="bi bi-boxes"> App</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {user?.biz && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/mycards">
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {theme === "light" ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handDarkThemeOnClick}
                >
                  Dark Mode <i className="bi bi-moon-stars"></i>
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleLightThemeOnClick}
                >
                  Light Mode <i className="bi bi-brightness-high"></i>
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign-out">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up_biz">
                    Sign Up Business
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
