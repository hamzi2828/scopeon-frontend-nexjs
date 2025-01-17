import React, { FC } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer
      className="bg-fixed bg-center relative"
      style={{
        backgroundImage:
          "url('https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/town-1.jpg')",
      }}
    >
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 bg-[#000000B2]"></div>
      <div className="py-10 relative z-10">
        <div className="max-w-screen-xl mx-auto sm:px-20 px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-black my-10">
          {/* Company Section */}
          <div>
            <h2 className="text-orange-600 text-3xl font-bold mb-4">Company</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-orange-600">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  TERMS OF USE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  LISTING PRICING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="md:border-l-2 border-white md:ps-16">
            <h2 className="text-orange-600 text-3xl font-bold mb-4">Subscribe</h2>
            <p className="text-white mb-6">
              Subscribe us and never miss our latest offer and article
            </p>
            <div className="flex">
              <input
                type="email"
                className="px-4 py-2 rounded-l-lg w-full bg-black text-white border border-white focus:outline-none"
                placeholder="Enter Your Email..."
              />
              <button className="bg-orange-600 text-white px-6 rounded-r-lg hover:bg-orange-600">
                SENT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="text-white mb-4 md:mb-0 text-center">
          <span className="font-semibold">Follow Us On</span>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-orange-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-600">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-600">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>

        {/* App Store Links */}
        <div className="text-white flex flex-col items-center md:items-end">
          <span className="font-semibold">Download Our App from</span>
          <div className="flex space-x-10 mt-2">
            <a href="#">
            <Image
                src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/appstore.png"
                alt="App Store"
                width={100} // Adjust width
                height={30} // Adjust height
                className="w-8"
            />
            </a>
            <a href="#">
            <Image
                src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/googleplay.png"
                alt="Play Store"
                width={100} // Adjust width
                height={30} // Adjust height
                className="w-7"
            />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-4 border-t">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
          <p>&copy; 2027 Inflix Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
