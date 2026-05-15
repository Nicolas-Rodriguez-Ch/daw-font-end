import { NavLink } from 'react-router';

import { ROUTE_PATHS } from '@/routes';

const Header = () => {
  return (
    <div className='bg-steel-700 text-periwinkle-200 p-4 md:p-8 flex flex-row md:justify-around gap-4 md:gap-8 md:text-2xl'>
      {Object.entries(ROUTE_PATHS).map((route) => {
        return (
          <NavLink
            to={route[1]}
            className={({ isActive }) => (isActive ? 'text-periwinkle-200' : 'text-skyblue-500')}
          >
            {route[0]}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Header;
