import React from "react";

const Header = () => {
  return (
    <header className="bg-[#8AE0DB] text-[#F4F4F4] p-4 border-b-8 border-[#5DC1B9]">
      <div className="container mx-auto flex justify-center items-center phone:justify-start">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#313131] drop-shadow-md uppercase font-kodchasan">
          Bienestar Express
        </h1>
        <div className="ml-4 phone:ml-2">
          <img
            src="/assets/images/Logo.png"
            alt="Logo"
            className="h-10 sm:h-10 md:h-12 lg:h-14 xl:h-16"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
