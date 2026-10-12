import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section>
      <div className="bg-[#f9fafb]">
        <div className="max-w-300 mx-auto text-center py-15 px-5 flex flex-col items-center justify-center">
          <h1 className="text-[35px] md:text-[50px] font-extrabold">
            Get in Touch
          </h1>
          <p className="text-xl text-[#1e3a59] max-w-200">
            We're here to help you with anything related to your health or our
            services.
          </p>
        </div>
      </div>
      <section className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 pt-20 pb-30 gap-8 px-4 md:px-0">
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl font-bold'>Let's talk</h1>
          <p className='text-lg text-[#1e3a59]'>
            Whether you have questions, need support, or want to book a service,
            our team is always ready to assist you quickly and professionally.
          </p>
          <div className='text-lg text-[#1e3a59] flex flex-col gap-4'>
            <p className='flex gap-4'>
            <span className="text-[#155dfc] text-2xl">
              <FaRegEnvelope />
            </span>{' '}
            support@medicares.com
          </p>
          <p className='flex gap-4'>
            <span className="text-[#22c55e] text-2xl">
              <FaPhoneAlt />
            </span>{' '}
            +234 800 000 0000
          </p>
          <p className='flex gap-4'>
            <span className="text-[#f97316] text-2xl">
              <FaMapMarkerAlt />
            </span>{' '}
            Nigeria
          </p>
          </div>
        </div>
        <div className='p-10 border-2 border-gray-200 shadow rounded-2xl flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label>Full Name</label>
            <input className='p-4 rounded-lg border-2 border-gray-200 outline-none focus:outline-none focus:border-blue-600 ' type="text" placeholder="Enter your name" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input className='p-4 rounded-lg border-2 border-gray-200 outline-none focus:outline-none focus:border-blue-600 ' type="email" placeholder="Enter your email" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Message</label>
            <textarea className='pt-4 pb-20 px-4 rounded-lg border-2 border-gray-200 outline-none focus:outline-none focus:border-blue-600 ' type="text" placeholder="How can we help you?" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 w-full">
              Send Message
            </button>
        </div>
      </section>
    </section>
  );
};

export default Contact;
