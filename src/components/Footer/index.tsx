import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router';

import TextCustom from '../TextCustom';

const Footer = () => {
  return (
    <div className='bg-steel-700 text-periwinkle-200 p-2 md:p-4 flex flex-row md:justify-around gap-4 md:gap-8'>
      <span className='p-2 md:p-4'>
        <TextCustom
          text='Web App Development Project'
          variant='regular'
          className='text-2xl  md:text-3xl'
        />
      </span>
      <div className='md:flex md:flex-row'>
        <TextCustom
          text='Contact us:'
          variant='regular'
          className='p-2 md:p-4 flex justify-center text-2xl  md:text-3xl'
        />
        <div className='flex flex-row md:gap-2'>
          <Link
            to='https://github.com/Koervege'
            className='p-2 md:p-4 flex flex-row gap-2 md:gap-4 align-middle'
          >
            <TextCustom text="Carlos' Github:" variant='small' className='text-xl  md:text-3xl' />
            <FaGithubSquare size={68} />
          </Link>
          <Link
            to='https://github.com/Nicolas-Rodriguez-Ch'
            className='p-2 md:p-4 flex flex-row gap-2 md:gap-4 align-middle'
          >
            <TextCustom text="Nicolás' Github:" variant='small' className='text-xl  md:text-3xl' />
            <FaGithubSquare size={68} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
