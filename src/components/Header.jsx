import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="bg-white">
      <section className="flex max-w-300 mx-auto border-b-2 py-8 border-gray-300 items-center justify-between">
        <h1 className="font-extrabold text-[27px] text-[#1e3a59]">Medicares</h1>
        <nav className="hidden md:block text-[#1e3a59] font-bold text-[19px]">
          <ul className="flex gap-10">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/services'}>Services</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="hidden md:block text-[19px] py-2 px-5 border rounded-lg">
            Contact Us
          </button>
          <button className='md:hidden'>
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
