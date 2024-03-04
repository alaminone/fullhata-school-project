import moment from "moment";
import { FaFacebook, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const time = moment().format('YYYY');  
    return (
        <div className="my-20">
            <footer className="footer p-10 bg-slate-100">
  <aside>
<div className="flex  items-center gap-4">
<img
className="w-20"
src={'https://i.ibb.co/2MVT6M9/10940560-794181007304317-1748932219661919214-n-removebg.png'} alt="" />
<h3 className="text-3xl font-semibold">
ফুলহাতা মাধ্যমিক বিদ্যালয়
</h3>
</div>
    <p className="font-medium text-xl"> ফুলহাতা, মোড়েলগঞ্জ, বাগেরহাট<br/> প্রতিষ্ঠিত: ১৯৪৬ খ্রিষ্টাব্দ </p>
  </aside> 
  <nav>
    <h6 className="footer-title">contact us</h6> 
    <div className="grid grid-flow-col gap-4">
  <div className="space-y-5 my-5">
  <p className="flex gap-2 items-center font-medium text-xl">
        <FaPhoneAlt />
       +880 171 379 7938
        </p>
        <p className="flex gap-2 items-center font-medium text-xl">
        <MdEmail />
        fulhatahs@gmail.com
        </p>
  </div>
    </div>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4 my-5">
         <a
                href="https://www.facebook.com/FulhataHighSchoolOfficial/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={40} className=" text-[#1877F2] cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@FulhataHighSchool"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={40} className=" text-[#FF0000] cursor-pointer" />
              </a>
    </div>
  </nav>
</footer>



{/* copy right */}
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © {time} - All right reserved by ফুলহাতা মাধ্যমিক বিদ্যালয়</p>
  </aside>
</footer>

        </div>
    );
};

export default Footer;