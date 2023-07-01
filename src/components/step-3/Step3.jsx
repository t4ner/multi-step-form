import React, { useState } from "react";
import Step from "../step/Step";
import { step3 } from "../../../form.json";

function Step3({onStepSubmit,formData,...props}) {
  const {billingType} = formData.step2;
  const [selectedAddons, setSelectedAddons] = useState(formData.step3.selectedAddons ?? []);

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };
const onSubmit = (e)=>{
  e.preventDefault()
  onStepSubmit("step3","step4",{
    selectedAddons
  }
  )
}
  return (
    <Step {...props} handleSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        {step3[billingType].map((item) => (
          <label
            className={`flex items-center gap-5 p-6 border rounded-lg hover:border-blue-500 duration-300 ${
              selectedAddons.some((i) => i.id === item.id) ? "bg-blue-100" : ""
            }`}
            key={item.id}
          >
            <input
        
              type="checkbox"
              onChange={(e) => changeSelectedAddons(e.target.checked, item)}
            />
            <div className="flex-1">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
            <p className="font-medium">{item.price}</p>
          </label>
        ))}
      </div>
    </Step>
  );
}

export default Step3;
