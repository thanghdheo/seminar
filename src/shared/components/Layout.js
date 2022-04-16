/* eslint-disable @next/next/no-img-element */
import { Dialog, Menu } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  ViewListIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ userName, userEmail, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState([
    { id: 0, name: "Dashboard", path: "/", icon: HomeIcon, noti: 0 },
    {
      id: 1,
      name: "Nhân viên",
      path: "/employee",
      icon: UsersIcon,
    },
    {
      id: 2,
      name: "Nghỉ phép",
      icon: CalendarIcon,
      path: "/schedule",
      children: [
        { id: 0, name: "Cá nhân", path: "/schedule/personal" },
        { id: 1, name: "Duyệt phép", path: "/schedule/approval", noti: 3 },
      ],
    },
    {
      id: 3,
      name: "Quy định nghỉ",
      path: "/rules",
      icon: CogIcon,
      children: [
        { id: 0, name: "Quy định chung", path: "/rules/main" },
        { id: 1, name: "Cấu hình mức duyệt", path: "/rules/timeoff" },
      ],
    },
  ]);

  const router = useRouter();

  //   useEffect(() => {
  //     const tmp = menu.forEach(item => {
  //       if (item.id === 1) {
  //         item.noti = 3//data from server;
  //       }
  //     });
  // setMenu(tmp)
  //   }, []);

  return (
    <>
      <div>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
          open={sidebarOpen}
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />

          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src="/pitek_hrm_logo.png" alt="HRM" />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="space-y-1">
                {navigation.map(item => (
                  <div key={item.id}>
                    <Link href={item.path} passHref>
                      <a
                        className={classNames(
                          item?.path === router.asPath
                            ? "bg-radical-red-50 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium justify-between",
                        )}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={classNames(
                              item?.path === router.asPath
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                        {item.noti >= 0 && (
                          <span
                            className={classNames(
                              "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-radical-red-600 text-white",
                            )}
                          >
                            {item.noti}
                          </span>
                        )}
                      </a>
                    </Link>
                    {item.children?.length > 0 && (
                      <div className="bg-gray-50 flex flex-col">
                        {item.children.map(child => (
                          <div key={child.id}>
                            <Link passHref href={child.path}>
                              <p
                                className={classNames(
                                  child?.path === router.asPath
                                    ? "bg-radical-red-50 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center justify-between pl-12 pr-2 py-2 text-sm font-medium cursor-pointer",
                                )}
                              >
                                <span>{child?.name}</span>
                                {child.noti && (
                                  <span
                                    className={classNames(
                                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-radical-red-600 text-white",
                                    )}
                                  >
                                    {child.noti}
                                  </span>
                                )}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-8 w-auto" src="/pitek_hrm_logo.png" alt="HRM" />
            </div>
            <div className="mt-6 flex-grow flex flex-col">
              <nav className="flex-1 pb-4 space-y-1">
                {navigation.map((item, key) => (
                  <div key={item.id}>
                    <Link href={item.path} passHref>
                      <div
                        className={classNames(
                          item.path === router.asPath
                            ? "bg-radical-red-50 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group w-full flex items-center justify-between pl-3 pr-2 py-2 text-sm font-medium cursor-pointer",
                        )}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={classNames(
                              "mr-3 flex-shrink-0 h-6 w-6 text-gray-400",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>

                        {item.noti >= 0 && (
                          <span
                            className={classNames(
                              "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-radical-red-600 text-white",
                            )}
                          >
                            {item.noti}
                          </span>
                        )}
                      </div>
                    </Link>
                    {item.children?.length > 0 && (
                      <div className="bg-gray-50 flex flex-col">
                        {item.children.map(child => (
                          <div key={child.id}>
                            <Link passHref href={child.path}>
                              <p
                                className={classNames(
                                  child?.path === router.asPath
                                    ? "bg-radical-red-50 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center justify-between pl-12 pr-2 py-2 text-sm font-medium cursor-pointer",
                                )}
                              >
                                {child?.name}
                                {child.noti && (
                                  <span
                                    className={classNames(
                                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-radical-red-600 text-white",
                                    )}
                                  >
                                    {child.noti}
                                  </span>
                                )}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-end">
              <div className="ml-4 flex items-center gap-7 md:ml-6">
                {/* User */}
                <div className="flex gap-3">
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map(item => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>

                  <div className="flex flex-col">
                    <p className="text-sm">{userName}</p>
                    <p className="text-xs text-gray-500">{userEmail}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center  border-gray-300">
                  <div className="h-5 bg-gray-500" style={{ width: 1 }}></div>
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View List</span>
                    <ViewListIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-6">{children}</div>
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
};

Layout.defaultProps = {
  userName: "Anh Tú",
  userEmail: "tunta@pitek.one",
};
