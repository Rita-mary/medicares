import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className=" bg-[#f9fafb]">
      <section className="max-w-300 mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="font-extrabold text-[27px] text-[#1e3a59]">
              Medicares
            </h1>
            <p className=' text-gray-600'>
              Providing reliable and modern healthcare services to ensure your
              well-being at every step.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-[#1e3a59] font-bold text-[19px]">Company</h1>
            <ul className="flex flex-col gap-3  text-gray-600  ">
              <li>
                <Link to={'/about'}>About Us</Link>
              </li>
              <li>
                <Link to={'/services'}>Our Mission</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-[#1e3a59] font-bold text-[19px]">Contact</h1>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li>Email: support@medicares.com</li>
              <li>Phone: +234 800 000 0000</li>
              <li>Location: Nigeria</li>
            </ul>
          </div>
        </div>
      </section>
      <p className="border-t-2 border-gray-300 pt-4 pb-8 mx-5 text-center text-gray-600">
        © {year} Medicares. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
