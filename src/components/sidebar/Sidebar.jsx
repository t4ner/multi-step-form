import React from "react";
import { Items } from "./constants";
function Sidebar({ activeStep }) {
  return (
    <div className="flex flex-col gap-8 bg-sidebarBg bg-bottom bg-no-repeat bg-cover w-2/5 rounded-lg text-white p-6">
      {Items.map((item) => (
        <div className="flex items-center gap-4" key={item.id}>
          <span
            className={`h-12 w-12 border rounded-full flex justify-center items-center ${
              activeStep === item.id ? "bg-blue-400 border-transparent" : ""
            }`}
          >
            {item.number}
          </span>
          <div>
            <h5 className="text-sm uppercase opacity-75">{item.subtitle}</h5>
            <h2 className="uppercase font-semibold">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
