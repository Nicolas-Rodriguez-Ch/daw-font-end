import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router';

import TextCustom from '../TextCustom';

const Footer = () => {
  return (
    <div className='bg-steel-700 text-periwinkle-200 p-2 md:p-4 flex flex-col items-center md:flex-row md:justify-around md:items-center md:gap-8'>
      <span className='p-2 md:p-4'>
        <TextCustom text='Web App Development Project' variant='regular' />
      </span>

      <Link
        to='https://github.com/Nicolas-Rodriguez-Ch/daw-font-end'
        className='hidden md:block hover:text-periwinkle-100 hover:underline underline-offset-4 transition-colors'
      >
        <TextCustom text='Project Repo' variant='regular' />
      </Link>

      <div className='flex flex-col items-center md:flex-row md:items-center'>
        <TextCustom text='Contact us:' variant='regular' className='p-2 md:p-4' />
        <div className='flex flex-row md:gap-2'>
          <Link
            to='https://github.com/Koervege'
            className='p-2 md:p-4 flex flex-row items-center gap-2 md:gap-4 hover:text-periwinkle-100 transition-colors'
          >
            <TextCustom text="Carlos' Github:" variant='small' />
            <FaGithubSquare size={45} />
          </Link>
          <Link
            to='https://github.com/Nicolas-Rodriguez-Ch'
            className='p-2 md:p-4 flex flex-row items-center gap-2 md:gap-4 hover:text-periwinkle-100 transition-colors'
          >
            <TextCustom text="Nicolás' Github:" variant='small' />
            <FaGithubSquare size={45} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
