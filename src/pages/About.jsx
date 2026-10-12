import medcare4 from '../assets/medcare4.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="bg-[#f9fafb]">
        <div className="max-w-300 mx-auto text-center py-15 px-5 flex flex-col items-center justify-center">
          <h1 className="text-[35px] md:text-[50px] font-extrabold">
            About Medicares
          </h1>
          <p className="text-xl text-[#1e3a59] max-w-200">
            We are a modern healthcare platform dedicated to making quality
            medical care accessible, affordable, and compassionate for everyone.
          </p>
        </div>
      </div>
      <section className="max-w-300 mx-auto flex flex-col md:flex-row py-10 gap-12 md:gap-18 px-4 md:px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[40px] font-extrabold">Our Mission</h1>
          <p className="text-xl text-gray-600">
            At Medicares, our mission is simple to connect patients with trusted
            healthcare professionals quickly and easily. We believe healthcare
            should be accessible anytime, anywhere.
          </p>
          <p className="text-xl text-gray-600">
            We combine technology and compassion to ensure every patient
            receives the care they deserve.
          </p>
        </div>
        <img className="w-120 h-80 rounded-2xl" src={medcare4} alt="Patient" />
      </section>
      <div className="bg-[#f9fafb]">
        <div className="max-w-300 mx-auto flex flex-col items-center justify-center py-12 px-5 md:px-0">
          <h1 className="text-[40px] font-extrabold mb-10">Our Values</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col text-center py-6 px-6 shadow-sm rounded-xl bg-[#ffffff]">
              <h1 className="text-lg font-bold mb-2">Care</h1>
              <p className="text-lg text-gray-600">
                Every patient matters to us.
              </p>
            </div>
            <div className="flex flex-col text-center py-6 px-6 shadow-sm rounded-xl bg-[#ffffff]">
              <h1 className="text-lg font-bold mb-2">Trust</h1>
              <p className="text-lg text-gray-600">
                We build reliable healthcare connections.
              </p>
            </div>
            <div className="flex flex-col text-center py-6 px-6 shadow-sm rounded-xl bg-[#ffffff]">
              <h1 className="text-lg font-bold mb-2">Innovation</h1>
              <p className="text-lg text-gray-600">
                Modern solutions for better healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-300 mx-auto flex flex-col items-center justify-center text-center py-25 px-5 md:px-0 gap-6">
        <h1 className="text-[35px] font-extrabold leading-10">
          Want to experience better healthcare?
        </h1>
        <p className="text-xl text-gray-600">
          Join Medicares today and connect with trusted doctors instantly.
        </p>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 w-fit">
          <Link to={'/contact'}>Contact Us</Link>
        </button>
      </div>
    </section>
  );
};

export default About;
