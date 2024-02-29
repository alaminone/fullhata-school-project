import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";
const TopNav = () => {
    return (
        <div className="bg-blue-200 flex justify-between  px-1 md:px-5 lg:px-10 py-1">
            <div className="md:flex gap-3 flex-none ">
        <p className="flex gap-2 items-center font-medium">
        <FaPhoneAlt />
        01713797938
        </p>
        <p className="flex gap-2 items-center font-medium">
        <MdEmail />
        fulhatahs@gmail.com
        </p>
            </div>
             <div className="group relative sm:block">
              {/* search */}
              <input
                type="text"
                placeholder="Search"
                className="w-[150px] md:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-xl border
                 border-gray-300 px-2 py-1 focus:outline-none focus:border-3 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 text-xl group-hover:text-primary absolute top-5 md:top-1/2 -translate-y-1/2 right-3" />
            </div>
        </div>
    );
};

export default TopNav;