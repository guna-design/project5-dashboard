import React from "react";


function Searchbar() {
  return (
    <>
      <div class="absolute pt-8 pl-72 columns-2 ">
        <div class="relative ">
          <div class="absolute top-1 left-2 inline-flex items-center p-2">
            <i class="fas fa-search text-gray-500"></i>
          </div>
          <input
            class="w-full h-10 pl-16 sm:w-64 max-w-xs py-1 text-base placeholder-gray-600 border  focus:shadow-outline"
            type="search"
            placeholder="Search"
          />
        </div>
        <div class="pl-96 ">
        <button className="bg-white w-8 h-8 rounded-sm shadow-md hover:bg-slate-100">
          <i class=" fa-regular fa-bell text-gray-500 text-lg"></i>
        </button>
      </div>
      
      </div>
    
      
     
     
    </>
  );
}

export default Searchbar;
