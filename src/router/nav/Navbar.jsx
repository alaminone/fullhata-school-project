import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlink = <>
    
    <li>
        <NavLink to={'/'} 
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Home</NavLink>
    </li>
    <li>
        <NavLink to={'/toprated'}
             className={({ isActive, isPending }) =>
             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
           }
        >Top Rated</NavLink>
    </li>
    <li>
        <NavLink to={'/kidswear'}
         className={({ isActive, isPending }) =>
         isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
       }
        >
            Kids Wear
        </NavLink>
    </li>
    <li>
        <NavLink to={'/manswear'}
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Mans Wear</NavLink>
    </li>
    <li>
        <NavLink to={'/womenswear'}
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Womens Wear</NavLink>
    </li>
 
   
    
    </>

// electronics

const electronics = <>

</>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
             z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-950 dark:text-white">
        {navlink}
          {/* electronics */}
              <li>
                <a>Electronics</a>
                <ul className="p-2">
                 {electronics}
                </ul>
              </li>
           
      
            </ul>
          </div>
        
           <a  className="uppercase font-bold  md:text-3xl flex btn btn-ghost text-xl gap-2"
        href="/"
        
      >
        <img
          src={"https://i.ibb.co/QrQc5GV/homeschooling.png"}
          alt="logo"
          className="w-8"
        />
        Fulhata High School 
      </a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center  gap-5 text-xl font-semibold cursor-pointer ">
    {navlink}
      {/* electronics */}
            <li>
              <details>
                <summary>Electronics</summary>
                <ul className="p-2">
              {electronics}
                </ul>
              </details>
            </li>
             
          
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;


// <div className="shadow-md  px-1 md:px-5 lg-px-10  duration-200 relative z-40">
      
// {/* upper */}
// <div className=" py-2">
//   <div className="container flex justify-between items-center">
//     <div>
//       <a
//         href="/"
//         className="uppercase font-bold text-2xl sm:text-3xl flex gap-2"
//       >
//         <img
//           src={"https://i.ibb.co/QrQc5GV/homeschooling.png"}
//           alt="logo"
//           className="w-10"
//         />
//         Fulhata High School 
//       </a>
//     </div>
//     <div className="flex justify-between items-center gap-4">
     
//       {/* order button */}
//       <div className="flex justify-between items-center gap-4">
     
//       </div>
//     </div>
//   </div>
  
// </div>
// {/* lower */}
// <div>

// </div>
// </div>