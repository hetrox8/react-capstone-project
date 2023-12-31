import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <NavLink to="/" data-testid="back-button">
        {location.pathname !== '/' && <FiArrowLeft />}
      </NavLink>

      <Outlet />
    </div>
  );
}

export default Navbar;
