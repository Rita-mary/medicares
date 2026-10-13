// import { Link } from 'react-router-dom';
// import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
// import { useState } from 'react';
// import { HashLink } from 'react-router-hash-link';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <header className="bg-white px-5">
//       <section className="flex max-w-300 mx-auto border-b-2 py-8 border-gray-300 items-center justify-between">
//         <h1 className="font-extrabold text-[27px] text-[#1e3a59]">Medicares</h1>
//         <nav className="hidden md:block text-[#1e3a59] font-bold text-[19px]">
//           <ul className="flex gap-10">
//             <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
//               <Link to={'/'}>Home</Link>
//             </li>
//             <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
//               <HashLink smooth to="/#services">
//                 Services
//               </HashLink>
//               {/* <a href="/#services">Services</a> */}
//             </li>
//             <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
//               <Link to={'/about'}>About</Link>
//             </li>
//           </ul>
//         </nav>
//         <div>
//           <button className="hidden md:block text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600">
//             <Link to={'/contact'}>Contact Us</Link>
//           </button>
//           {!isOpen && (
//             <button className="md:hidden" onClick={handleOpen}>
//               <HiOutlineMenuAlt3 size={26} />
//             </button>
//           )}
//           {isOpen && (
//             <button className="md:hidden" onClick={handleOpen}>
//               <HiOutlineX size={26} />
//             </button>
//           )}
//         </div>
//       </section>
//       {isOpen && (
//         <nav className="md:hidden mt-5 flex flex-col  gap-5">
//           <ul className="flex flex-col gap-6 text-[#1e3a59] font-bold text-[19px]">
//             <li
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md"
//             >
//               <Link to={'/'}>Home</Link>
//             </li>
//             <li
//               className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md cursor-pointer"
//               onClick={() => {
//                 setIsOpen(false); 

//                 setTimeout(()=>{
//                   const target =document.getElementById("services")
//                   if (target){
//                     target.scrollIntoView({behavior:"smooth" ,block:"start" })
//                   }
//                 },100)
//               }}
              
//             >
//               Services
//             </li>
            

//             <li
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md"
//             >
//               <Link to={'/about'}>About</Link>
//             </li>
//           </ul>
//           <button
//             onClick={() => setIsOpen(false)}
//             className=" text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600 w-full"
//           >
//             <Link to={'/contact'}>Contact Us</Link>
//           </button>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // FIXED: Safely closes the menu AFTER the browser processes the link navigation
  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  // Reusable scroll function that waits for the home page DOM layout to completely mount
  const scrollWithOffset = (el) => {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <header className="bg-white px-5">
      <section className="flex max-w-300 mx-auto border-b-2 py-8 border-gray-300 items-center justify-between">
        <h1 className="font-extrabold text-[27px] text-[#1e3a59]">Medicares</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block text-[#1e3a59] font-bold text-[19px]">
          <ul className="flex gap-10">
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <HashLink smooth to="/#services" scroll={scrollWithOffset}>
                Services
              </HashLink>
            </li>
            <li className="hover:bg-blue-200 transition ease-in duration-300 hover:text-blue-500 py-1 px-4 rounded-lg">
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        
        {/* Desktop Contact Link Container */}
        <div className="hidden md:block text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600 cursor-pointer">
          <Link to={'/contact'}>Contact Us</Link>
        </div>
        
        {/* Mobile Hamburger Toggles */}
        <div className="md:hidden">
          {!isOpen ? (
            <button onClick={handleOpen} aria-label="Open Menu">
              <HiOutlineMenuAlt3 size={26} />
            </button>
          ) : (
            <button onClick={handleOpen} aria-label="Close Menu">
              <HiOutlineX size={26} />
            </button>
          )}
        </div>
      </section>

      {/* Small/Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-5 flex flex-col gap-5 pb-5">
          <ul className="flex flex-col gap-6 text-[#1e3a59] font-bold text-[19px]">
            <li className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md">
              <Link to={'/'} onClick={closeMenu} className="block w-full">
                Home
              </Link>
            </li>
            
            <li className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md">
              <HashLink 
                smooth 
                to="/#services" 
                scroll={scrollWithOffset} 
                onClick={closeMenu} 
                className="block w-full"
              >
                Services
              </HashLink>
            </li>

            <li className="hover:bg-blue-300 transition ease-in duration-300 hover:text-blue-500 py-2 px-3 rounded-md">
              <Link to={'/about'} onClick={closeMenu} className="block w-full">
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Contact Link Container */}
          <div className="text-[19px] py-2 px-5 border transition duration-300 rounded-lg hover:text-white hover:bg-blue-600 w-full text-center cursor-pointer">
            <Link to={'/contact'} onClick={closeMenu} className="block w-full">
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

