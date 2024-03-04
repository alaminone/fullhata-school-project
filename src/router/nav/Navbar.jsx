// import { NavLink } from "react-router-dom";


// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// import { IoMdSearch } from "react-icons/io";
// const Navbar = () => {
//     const navlink = <>
    
//     <li>
//         <NavLink to={'/'} 
//             className={({ isActive, isPending }) =>
//             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//           }
//         >Home</NavLink>
//     </li>
//     <li>
//         <NavLink to={'/event'}
//              className={({ isActive, isPending }) =>
//              isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//            }
//         >Event</NavLink>
//     </li>
//     <li>
//         <NavLink to={'/gallery'}
//          className={({ isActive, isPending }) =>
//          isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//        }
//         >
//             Gallery
//         </NavLink>
//     </li>
//     <li>
//         <NavLink to={'/teacher'}
//             className={({ isActive, isPending }) =>
//             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//           }
//         >Teacher</NavLink>
//     </li>
//     <li>
//         <NavLink to={'/staff'}
//             className={({ isActive, isPending }) =>
//             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//           }
//         >Staff</NavLink>
//     </li>
//     <li>
//         <NavLink to={'/contact'}
//             className={({ isActive, isPending }) =>
//             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
//           }
//         >Contact Us</NavLink>
//     </li>
 
   
    
//     </>

// // announcement

// const announcement = <>

// </>
//     return (
//     <section className="fixed z-10 opacity-80 w-full text-black">
      
//       <div className="bg-blue-200 flex justify-between  px-1 md:px-5 lg:px-10 py-1">
//             <div className="md:flex gap-3 flex-none ">
//         <p className="flex gap-2 items-center font-medium">
//         <FaPhoneAlt />
//         01713797938
//         </p>
//         <p className="flex gap-2 items-center font-medium">
//         <MdEmail />
//         fulhatahs@gmail.com
//         </p>
//             </div>
//              <div className="group relative sm:block">
//               {/* search */}
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-[150px] md:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-xl border
//                  border-gray-300 px-2 py-1 focus:outline-none focus:border-3 focus:border-primary"
//               />
//               <IoMdSearch className="text-gray-500 text-xl group-hover:text-primary absolute top-5 md:top-1/2 -translate-y-1/2 right-3" />
//             </div>
//         </div>
//         <div className="navbar bg-base-100  ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
//              z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-950 dark:text-white">
//         {navlink}
//           {/* announcement */}
//               <li>
//                 <a>Announcement</a>
//                 <ul className="p-2">
//                  {announcement}
//                 </ul>
//               </li>
           
      
//             </ul>
//           </div>
        
//            <a  className="uppercase font-bold  md:text-3xl flex btn btn-ghost text-xl gap-2"
//         href="/"
        
//       >
//         <img
//           src={"https://i.ibb.co/2MVT6M9/10940560-794181007304317-1748932219661919214-n-removebg.png"}
//           alt="logo"
//           className="w-8 md:w-12"
//         />
//         ফুলহাতা মাধ্যমিক বিদ্যালয়

      
//       </a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//         <ul className="flex justify-center  gap-5 text-xl font-semibold cursor-pointer ">
//     {navlink}
//       {/* announcement */}
//             <li>
//               <details>
//                 <summary>Announcement</summary>
//                 <ul className="p-2">
//               {announcement}
//                 </ul>
//               </details>
//             </li>
             
          
//           </ul>
//         </div>
       
//       </div>
      
//     </section>
//     );
// };

// export default Navbar;




// const NavBarButton = ({ title }) => (
//   <div className="grow font-bold text">{title}</div>
// );

// const NavBar = () => {
//   const buttons = ["Home", "About", "Guru", "Siswa", "Pendaftaran", "lainya", "Kontak"];
//   return (
//     <nav className="flex gap-5 justify-between px-5 max-md:flex-wrap max-md:max-w-full">
//       {buttons.map((button, index) => (
//         <NavBarButton key={index} title={button} />
//       ))}
//     </nav>
//   );
// };

// const Header = ({ imageSrc }) => (
//   <header className="flex gap-5 justify-between text-sm tracking-wide leading-5 whitespace-nowrap text-stone-300 max-md:flex-wrap">
//     <img loading="lazy" src={imageSrc} alt="" className="w-11 aspect-[0.83]" />
//     <div className="flex flex-col self-start mt-5 max-md:max-w-full">
//       <NavBar />
//       <div className="mt-2 ml-3.5 w-4 h-0.5 bg-white rounded max-md:ml-2.5" />
//     </div>
//   </header>
// );

// const App = () => {
//   return (
//     <div>
//       <Header imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4f25d9b1999dc92de2f05d0b006656697637c6040e31f4ec56c1b9ae007de2?apiKey=0951b8039562450f86929084edddc09f&" />
//     </div>
//   );
// };

// export default App;



import { NavLink } from "react-router-dom";

const Navbar = () => {
  // eslint-disable-next-line react/prop-types
  const NavBarButton = ({ title, to }) => (
    <NavLink
      to={to}
      className="grow font-bold text"
      activeClassName="text-blue-500"
    >
      {title}
    </NavLink>
  );

  const buttons = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Guru", to: "/guru" },
    { title: "Siswa", to: "/siswa" },
    { title: "Pendaftaran", to: "/pendaftaran" },
    { title: "Lainya", to: "/lainya" },
    { title: "Kontak", to: "/kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-5 bg-transparent
    py-5 text-sm tracking-wide leading-5 text-stone-300 max-md:flex-wrap">
     
       <a  className="uppercase font-bold  md:text-3xl flex btn btn-ghost text-xl gap-2"
        href="/"
        
      >
        <img
          src={"https://i.ibb.co/2MVT6M9/10940560-794181007304317-1748932219661919214-n-removebg.png"}
          alt="logo"
          className="w-8 md:w-12"
        />
        ফুলহাতা মাধ্যমিক বিদ্যালয়

      
      </a>
      <div className="flex flex-col self-start">
        <nav className="flex gap-5 flex-wrap">
          {buttons.map((button, index) => (
            <NavBarButton
              key={index}
              title={button.title}
              to={button.to}
            />
          ))}
        </nav>
        <div className="mt-2 ml-3.5 w-4 h-0.5 bg-white rounded max-md:ml-2.5" />
      </div>
    </header>
  );
};

export default Navbar;


