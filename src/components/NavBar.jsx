import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { FolderIcon, HomeIcon } from "@heroicons/react/outline";
import { Link, useLocation, useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavBar() {
  const [navigation, setNavigation] = useState(() => [
    {
      name: "Danh sách sản phẩm",
      href: "/",
      icon: FolderIcon,
      current: false,
    },
  ]);
  const param = useLocation()

  useEffect(() => {
    const tmp = navigation.map(item => item.href === param.pathname ? {...item,current: true} :  {...item,current: false})
    setNavigation(tmp)
  },[param,navigation])

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow border-r border-gray-500 pt-5  overflow-y-auto bg-[#00837B]" >
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-[45px] w-full flex justify-center items-center font-semibold text-style">RFID</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            {/* <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? " text-white border-b-2 border-[#DA6744]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
