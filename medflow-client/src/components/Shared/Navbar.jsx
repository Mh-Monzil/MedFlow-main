import { Link, NavLink, useLocation } from "react-router-dom";


import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo  */}

        <Logo />

        {/* navList */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                className="font-medium text-lg relative group"
              >
                {link.name}
                <span
                  className={`h-[2px] inline-block bg-primaryTeal absolute left-0 -bottom-1 group-hover:w-full transition-all ease-in duration-300 ${
                    pathname === link.path ? "w-full" : "w-0"
                  }`}
                ></span>
              </NavLink>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <PrimaryButton path={"/appointment"} title={"Appointment"} />
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <IoMenu className="text-3xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <Logo />
              {/* route  */}
              <div className="flex flex-col gap-5 ">
                {navLinks.map((link) => (
                  <Link
                    href={`${link.path}`}
                    key={link.name}
                    className="mx-auto relative group font-semibold text-2xl"
                  >
                    {link.name}
                    <span
                      className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-all ease-in duration-300 ${
                        pathname === link.path ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>
              {/* appointment  */}
              <PrimaryButton path={"/appointment"} title={"Appointment"} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
