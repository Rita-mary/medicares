import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white px-5">
      <section className="flex max-w-300 mx-auto border-b-2 py-8 border-gray-300 items-center justify-between">
        <h1 className="font-extrabold text-[27px] text-[#1e3a59]">Medicares</h1>
        <nav className="hidden md:block text-[#1e3a59] font-bold text-[19px]">
          <ul className="flex gap-10">
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="hidden md:block text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600">
            Contact Us
          </button>
          {!isOpen && (
            <button className="md:hidden" onClick={handleOpen}>
              <HiOutlineMenuAlt3 size={26} />
            </button>
          )}
          {isOpen && (
            <button className="md:hidden" onClick={handleOpen}>
              <HiOutlineX size={26} />
            </button>
          )}
        </div>
      </section>
      {isOpen && (
        <nav className="md:hidden mt-5 flex flex-col  gap-5">
          <ul className="flex flex-col gap-6 text-[#1e3a59] font-bold text-[19px]">
            <li
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md"
            >
              <Link to={'/'} onClick={handleOpen}>
                Home
              </Link>
            </li>
            <li
              className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md cursor-pointer"
              onClick={() => {
                setIsOpen(false); 

                setTimeout(()=>{
                  const target =document.getElementById("services")
                  if (target){
                    target.scrollIntoView({behavior:"smooth" ,block:"start" })
                  }
                },100)
              }}
              
            >
              Services
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md"
            >
              <Link to={'/about'} onClick={handleOpen}>
                About
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(false)}
            className=" text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600 w-full"
          >
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
