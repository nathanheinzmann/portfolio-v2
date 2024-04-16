import React from "react";

type Props = {
  active: boolean;
  children: React.ReactNode;
};

const TabButton = ({ active, children }: Props) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
