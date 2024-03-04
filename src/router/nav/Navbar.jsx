import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // eslint-disable-next-line react/prop-types
  const NavBarButton = ({ title, to }) => (
    <NavLink
      to={to}
      className="grow font-bold text"
      activeClassName="text-blue-500"
      activeStyle={{
        color: 'blue', // Change the color to the active color you desire
        borderBottom: '2px solid blue', // Add an underline border
        transition: 'color 0.3s, border-bottom 0.3s' // Add animation to the color and border-bottom changes
      }}
    >
      {title}
    </NavLink>
  );

  const buttons = [
    { title: "Home", to: "/" },
    { title: "News", to: "/news" },
    { title: "Notice", to: "/notice" },
    { title: "Gallery", to: "/pendaftaran" },
    { title: "Contact", to: "/contact" },
    { title: "About", to: "/about" },
    { title: "Dashboard", to: "/dashboard" },
  ];
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header className={`fixed top-0 left-0 right-0 z-10 flex
       justify-between items-center px-5 py-5 
        text-sm tracking-wide leading-5 max-md:flex-wrap ${scrolling ? 'bg-white shadow-lg text-black' : 'bg-transparent text-white'}`}>
        <a className="uppercase font-bold md:text-3xl flex btn btn-ghost text-xl gap-2" href="/">
          <img
            src={"https://i.ibb.co/2MVT6M9/10940560-794181007304317-1748932219661919214-n-removebg.png"}
            alt="logo"
            className="w-8 md:w-12"
          />
          ফুলহাতা মাধ্যমিক বিদ্যালয়
        </a>
        <div className="flex flex-col self-start items-center">
          <nav className="flex gap-5 flex-wrap ">
            {buttons.map((button, index) => (
              <NavBarButton
                key={index}
                title={button.title}
                to={button.to}
              />
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
