import React from "react";
import Step from "../step/Step";
import { step1 } from "../../../form.json";
function Step1({formData,onStepSubmit,...props}) {
  const onSubmit = (e)=>{
e.preventDefault()
const formData = new FormData(e.target)
const formProperties = Object.fromEntries(formData)
onStepSubmit("step1","step2",formProperties)

  }
  return (
    <Step {...props} handleSubmit={onSubmit}>
      <div className="flex flex-col gap-6 ">
        {step1.map((item) => (
          <div className="flex flex-col gap-2" key={item.id}>
            <label className="font-medium"> {item.label} </label>
            <input
            required 
            defaultValue={formData.step1[item.id]}
              className="border p-2 rounded-lg hover:border-blue-600 duration-300"
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
    </Step>
  );
}

export default Step1;
