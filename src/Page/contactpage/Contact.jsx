import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
    return (
   <section >
         <div className="hero min-h-[528px] "
     style={{backgroundImage:
      'url(https://i.ibb.co/rZJjhmB/172057519-964056477464746-4789773117920065536-n.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="  text-neutral-content">
    <div className="text-center w-8/12 mx-auto">
      <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">Get in Touch</h1>
      <p className="mb-5 text-sm md:text-sm lg:text-base">
      Reach out to us for any inquiries, feedback, or collaborations. Our team is here to assist you and provide the support you need. Whether you have questions about our services, want to learn more about our products, or simply want to say hello, we would love to hear from you. Feel free to use the contact form below or find our contact details to get in touch with us directly. We look forward to connecting with you</p>
      
    </div>
  </div>
</div>
{/* lower */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto my-20">
    {/* phone */}
    <div className="card border-blue-600 border-4 shadow-xl">
        <a href="tel:+8801713797938" className="block">
            <figure className="px-10 pt-10">
                <FaPhone className="text-7xl"></FaPhone>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">+880 171 379 7938</h2>
            </div>
        </a>
    </div>
    {/* email */}
    <div className="card border-blue-600 border-4 shadow-xl">
        <a href="mailto:fulhatahs@gmail.com" className="block">
            <figure className="px-10 pt-10">
                <MdEmail className="text-7xl"></MdEmail>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">fulhatahs@gmail.com</h2>
            </div>
        </a>
    </div>
    {/* location */}
    <div className="card border-blue-600 border-4 shadow-xl">
        <a href="https://www.google.com/maps/place/Fulhata+High+School+%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A6%B9%E0%A6%BE%E0%A6%A4%E0%A6%BE+%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A6%BF%E0%A6%95+%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F/@22.504125,89.7811924,17z/data=!3m1!4b1!4m6!3m5!1s0x3a001be6498d23f5:0xcac8ee1268e011f5!8m2!3d22.5041201!4d89.7837673!16s%2Fg%2F11_sdhjwb!5m1!1e1?entry=ttu" className="block">
            <figure className="px-10 pt-10">
                <MdLocationPin className="text-7xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Morrelgong, Bagerhat</h2>
            </div>
        </a>
    </div>
</div>

   </section>
    );
};

export default Contact;