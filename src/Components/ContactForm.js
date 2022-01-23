import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import { IoClose } from "react-icons/io5";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = ({ onClose }) => {
     const notify = () => {
          toast.success("Email sent successfully!", {
               position: "top-center",
               autoClose: 6000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });
     };
     const form = useRef();
     const formClose = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm("service_ejw9l3r", "template_woornns", form.current, "user_6sfgHnKNUUDFi15EFsJOn").then(
               (result) => {
                    console.log(result.text);
                    notify();
               },
               (error) => {
                    console.log(error.text);
               }
          );
     };
     return (
          <div style={{ backgroundImage: "url('/images/bg2.jpg')" }} className="bg-cover">
               <div className="bg-black bg-opacity-30">
                    <div className="h-screen w-full flex flex-col items-center justify-center bg-cover px-10" id="home">
                         <div className="max-w-md mx-auto my-10 bg-black border-2 border-rose-600 p-5 rounded-md shadow-sm">
                              <div class="text-center">
                                   <h1 class="my-3 text-3xl font-semibold text-white">Contact Me</h1>
                                   <p class="text-white">Fill up the form below to send me a message.</p>
                              </div>
                              <div class="m-7">
                                   <form ref={form} onSubmit={sendEmail}>
                                        <input type="hidden" name="apikey" value="aa16436c-eaf3-4e32-a147-295221355a48" />
                                        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                                        <div class="mb-6">
                                             <label for="name" class="block mb-2 text-sm text-white">
                                                  Full Name
                                             </label>
                                             <input type="text" name="name" id="name" placeholder="John Doe" required class={input1} />
                                        </div>
                                        <div class="mb-6">
                                             <label for="email" class="block mb-2 text-sm text-white">
                                                  Email Address
                                             </label>
                                             <input type="email" name="email" id="email" placeholder="your@email.com" required class={input2} />
                                        </div>
                                        <div class="mb-6">
                                             <label for="message" class="block mb-2 text-sm text-white">
                                                  Your Message
                                             </label>
                                             <textarea rows="5" name="message" id="message" placeholder="Your Message" class={input3} required></textarea>
                                        </div>
                                        <div class="mb-6">
                                             <button type="submit" href="#_" class={input4}>
                                                  <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-rose-700 via-purple-700 to-rose-600"></span>
                                                  <span class={input5}></span>
                                                  <span class="relative text-white">Send Message</span>
                                             </button>
                                        </div>
                                   </form>
                              </div>
                              <ToastContainer />
                         </div>
                    </div>
               </div>
          </div>
     );
};

const ceva = "text-black inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-80 bg-cover";
const input1 = "w-full px-3 py-2 placeholder-black text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-600 focus:border-indigo-800";
const input2 = "w-full px-3 py-2 placeholder-black text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-600 focus:border-indigo-300";
const input3 = "w-full px-3 py-2 placeholder-gray-700 border text-black  border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-600 focus:border-indigo-300 font-semibold";
const input4 = " relative w-full inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-purple-500";
const input5 = " absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease ";
