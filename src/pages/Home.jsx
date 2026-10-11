import medcare1 from '../assets/medcare1.png';
import medcare2 from '../assets/medcare2.png';
import medcare3 from '../assets/medcare3.png';
import medcare4 from '../assets/medcare4.jpg';
import { HiSearch } from 'react-icons/hi';
import { LuCalendarClock } from "react-icons/lu"; 
import { BsCloudCheck } from "react-icons/bs";
import { LuAmbulance } from 'react-icons/lu';


const Home = () => {
  return (
    <section className="max-w-300 mx-auto">
      <section className="flex flex-col md:flex-row gap-6 md:gap-12 px-4">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-start leading-15 justify-center gap-6">
          <h1 className="text-xl font-extrabold text-blue-500 uppercase mt-8">
            We are here for you
          </h1>
          <h1 className="text-[50px] font-extrabold">Welcome to Medicares</h1>
          <p className="text-xl text-[#1e3a59]">
            At Medicares, your health and well-being come first. We provide
            reliable and modern healthcare services designed to support you and
            your loved ones every step of the way.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 w-full">
              Contact a Doctor
            </button>
            <button className="text-blue-600 bg-white border px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 w-full">
              Learn More About Us
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center md:py-10 gap-4 md:gap-12">
          <img
            className="bg-[#014bec] h-60 w-50 md:h-80 md:w-60 rounded-2xl"
            src={medcare1}
            alt="Doctor 1"
          />
          <div className="flex flex-col gap-4 md:gap-6">
            <img
              className="bg-[#0335a1] rounded-2xl w-70 md:w-70"
              src={medcare2}
              alt="Doctor 2"
            />
            <img
              className="bg-[#e17979] rounded-2xl w-70 md:w-70"
              src={medcare3}
              alt="Doctor 3"
            />
          </div>
        </div>
      </section>
      <section id='services' className='flex flex-col items-center text-center justify-center gap-2 mb-20 mt-8 scroll-mt-28 px-4 md:px-0'>
        <h1 className="text-[40px] font-extrabold">Our Services</h1>
        <p className="text-xl text-gray-600 mb-6">
          Our patients are our priority. We provide quality healthcare services
          you can trust.
        </p>
        <div className="text-lg text-gray-900 font-bold grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center w-full">
          <div className='flex flex-col items-center justify-center gap-4 py-4 px-10 bg-[#eff6ff] rounded-lg hover:bg-[#dbeafe]'>
            <button className='p-3 rounded-full text-[#155dfc] bg-[#dbeafe]'><HiSearch  size={32}/></button>
            <p >Find a Specialist</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 py-4 px-10 bg-[#f0fdf4] rounded-lg hover:bg-[#dbfce7]'>
            <button className='bg-[#dbfce7] text-[#22c55e] p-3 rounded-full'><LuCalendarClock size={32} /> </button>
            <p >Book Appointment</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4  py-4 px-10 bg-[#faf5ff] rounded-lg hover:bg-[#f3e8ff]'>
            <button className='bg-[#f3e8ff] text-[#9810fa] p-3 rounded-full'><BsCloudCheck size={32}  /></button>
            <p >Online Consultation</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 py-4 px-10 bg-[#fef2f2] rounded-lg hover:bg-[#ffe2e2]'>
            <button className='bg-[#ffe2e2] text-[#f97316] p-3 rounded-full'><LuAmbulance size={32}  /></button>
            <p >Emergency Care</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row py-10 gap-12 md:gap-18 px-4 md:px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[40px] font-extrabold">
            We Truly Care About Your Health
          </h1>
          <p className="text-xl text-gray-600">
            At Medicares, every patient matters. Our team of dedicated doctors
            and healthcare professionals are committed to providing
            compassionate, reliable, and personalized care whenever you need it.
          </p>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 w-fit">
            Learn More
          </button>
        </div>
        <img className="w-120 h-80 rounded-2xl" src={medcare4} alt="Patient" />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-15 md:py-20 px-4 text-center md:text-start">
        <h1 className="text-[30px] font-extrabold ">
          Subscribe for Latest Doctor Updates
        </h1>
        <p className="text-xl text-gray-600">
          Get health tips, doctor availability, and important updates delivered
          straight to your inbox.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-fit">
          <input
            className=" text-gray-600 px-6 py-4 border-3 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none w-full md:w-80"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 text-white px-5 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 w-full md:w-fit">
            Subscribe
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home;
