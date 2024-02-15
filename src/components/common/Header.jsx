import React from "react";

const Header = () => {
  return (
    <header className="bg-[#8AE0DB] text-[#F4F4F4] p-4 border-b-8 border-[#5DC1B9]">
      <div className="container mx-auto flex justify-center items-center phone:justify-start">
        <h1 className="xxs:text-sm phone:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-[#F4F4F4] drop-shadow-lg uppercase font-kodchasan">
          Bienestar Express
        </h1>
        <div className="ml-4 phone:ml-2">
          <img
            src="/assets/images/Logo.png"
            alt="Logo"
            className=" xxs:h-5 sm:h-10 md:h-10 xs:h-8 phone:h-8 lg:h-13"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
