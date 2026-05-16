import { NavLink } from 'react-router';

import { ROUTE_PATHS } from '@/routes';

const Header = () => {
  return (
    <nav className='bg-steel-700 text-periwinkle-200 p-4 md:p-8 flex flex-row justify-around gap-4 md:gap-8'>
      {Object.entries(ROUTE_PATHS).map((route) => (
        <NavLink
          key={route[0]}
          to={route[1]}
          className={({ isActive }) =>
            `text-lg md:text-2xl font-medium tracking-wide transition-colors hover:text-cream-200 ${
              isActive ? 'text-cream-300' : 'text-steel-300'
            }`
          }
        >
          {route[0]}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
