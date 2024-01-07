import React from "react";


function Sidebar() {
  return (
    <>
      <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 shadow-2xl ">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <span className="mx-2 text-2xl font-semibold text-blue-800">
              Medico Sales
            </span>
          </div>
        </div>

        <nav className="mt-10">
       
        <a
            className="flex items-center px-6 py-2 mt-4 text-blue-500 "
            href="/"
          >
            <i className="fa-brands fa-windows pl-8 "></i>
            <span className="mx-3">Dahboard</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-900 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-flask pl-8 "></i>
            <span className="mx-3">Lab test</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-calendar pl-8"></i>
            <span className="mx-3">Appointment</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-bag-shopping pl-8"></i>
            <span className="mx-3"> Medicine Order</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-envelope pl-8 "></i>
            <span className="mx-3"> Message</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-wallet pl-8 "></i>
            <span className="mx-3">Payment</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-gear pl-8 "></i>
            <span className="mx-3">Setting</span>
          </a>
          <a
            className="flex items-center px-6 py-3.5 mt-36 text-grey-300 opacity-50"
            href="/"
          >
            <i class="fa-solid fa-circle-question pl-8"></i>
            <span className="mx-3">Help</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
