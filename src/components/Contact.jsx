import React from "react";
import { FaLinkedin} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
   <>
    <div className="border-b border-neutral-900 pb-20">
        <div className="flex justify-center">
            <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
        </div>
        <div className="flex flex-wrap lg:justify-center ">
          
          <div className="mb-8 flex flex-wrap lg:justify-center lg:w-2/4">
            <div className="flex flex-wrap lg:justify-center mt-20">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <a href="mailto:zulkefal.khan705@gmail.com">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md p-4 text-purple-400">
                      <span className="text-4xl">
                      <MdEmail />
                      </span>
                      
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Email</p>
                    <p className="text-neutral-300 ">zulkefal.khan705@gmail.com</p>
                  </div>
                </div>
                </a>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-6 lg:px-10">
                <div className="flex items-start">
                <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-green-400">
                    <span className="text-4xl">

                     <FaWhatsapp/>
                     </span>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Phone Number</p>
                    <p className="text-neutral-500 ">
                    <a
                      href="https://wa.me/+923328947817/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 underline text-white"
                    >
                      Click to Chat
                    </a>
                    </p>
                  </div>
                  
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-purple-400">
                    <span className="text-4xl">

                     <MdEventAvailable/>
                     </span>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">Availability</p>
                    <p className="text-neutral-300 ">Full Time</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-6 lg:px-8">
                <div className="align-start flex">
                <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-400">
                    <span className="text-4xl">

                        <FaLinkedin />
                        </span>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Lets Connect</p>

                    <p className="mb-2 font-bold ">
                    <a
                      href="https://www.linkedin.com/in/0xZulkefal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 underline"
                    >
                      Click to Connect
                    </a>
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   </>
  );
};

export default Contact;
