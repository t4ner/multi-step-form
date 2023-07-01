import React, { useState } from "react";
import { step2 } from "../../../form.json";
import Step from "../step/Step";
import { Icons, DEFAULT_PLAN, DEFAULT_BILLING_TYPE } from "./constants";

function Step2({ formData, onStepSubmit, ...props }) {
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN);
  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );
  const onSubmit = (e) => {
    e.preventDefault();

    onStepSubmit("step2", "step3", {
      billingType,
      plan,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <div className="flex gap-6">
        {step2[billingType].map((item) => (
          <label
            key={item.id}
            className={`flex-1 border rounded-md p-6 hover:border-blue-400 duration-300 ${
              item.id === plan.id ? "bg-blue-100" : ""
            }`}
          >
            <input
              onChange={() => setPlan(item)}
              className="hidden"
              name="plan-type"
              type="radio"
            />
            <img className="mb-7" src={Icons[item.id]} alt="" />
            <h3 className="font-bold">{item.title}</h3>
            <h6 className="text-sm text-gray-400">{item.price}</h6>
            {billingType === "yearly" && (
              <p className="text-sm text-gray-400">{item.description}</p>
            )}
          </label>
        ))}
      </div>
      <div className="flex mt-10 items-center gap-6">
        <button
          className={`border p-2 border-blue-100 rounded-md text-blue-300 duration-300  ${
            billingType == "monthly" ? "bg-blue-200 !text-white" : ""
          }`}
          type="button"
          onClick={() => setBillingType("monthly")}
        >
          Monthly
        </button>
        <button
          className={`border p-2 border-blue-100 rounded-md text-blue-300 duration-300  ${
            billingType == "yearly" ? "bg-blue-200 !text-white" : ""
          }`}
          type="button"
          onClick={() => setBillingType("yearly")}
        >
          Yearly
        </button>
      </div>
    </Step>
  );
}

export default Step2;