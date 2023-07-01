import React from "react";

function Step({onBack, title, subtitle, children, hasBackButton, hasNextButton,handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-6 p-6">
      <div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-gray-400">{subtitle}</h3>
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex items-center justify-between">
        {hasBackButton && (
          <button onClick={onBack} className="text-gray-400 hover:text-black duration-300">
            Go Back
          </button>
        )}
        {hasNextButton ? (
          <button type="submit" className="ml-auto bg-blue-600 text-white py-1 px-3 rounded-md">
            Next Step
          </button>
        )
      :  <button type="submit" className="ml-auto bg-blue-600 text-white py-1 px-3 rounded-md">
      Confirm
    </button>}
      </div>
    </form>
  );
}

export default Step;
