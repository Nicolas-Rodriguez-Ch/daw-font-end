import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='bg-steel-700 text-periwinkle-200 p-2 md:p-4 flex flex-row md:justify-around gap-4 md:gap-8 md:text-2xl'>
      <span className='p-2 md:p-4'>Web App Development Project</span>
      <div className='md:flex md:flex-row'>
        <span className='p-2 md:p-4 flex flex-row gap-2 md:gap-4 justify-center'>Contact us:</span>
        <div className='flex flex-row md:gap-2'>
          <Link
            to='https://github.com/Koervege'
            className='p-2 md:p-4 flex flex-row gap-2 md:gap-4 align-middle'
          >
            Carlos' Github: <FaGithubSquare size={45} />
          </Link>
          <Link
            to='https://github.com/Nicolas-Rodriguez-Ch'
            className='p-2 md:p-4 flex flex-row gap-2 md:gap-4 align-middle'
          >
            Nicolás' Github: <FaGithubSquare size={45} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
