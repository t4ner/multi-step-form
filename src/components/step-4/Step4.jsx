import React from "react";
import Step from "../step/Step";

function Step4({ formData, ...props }) {
  const { billingType, plan } = formData.step2;
  const { selectedAddons } = formData.step3;
  const price = plan.price;
  const priceNumber = parseInt(price.match(/\d+/)[0]);
  return (
    <Step {...props}>
      <div className="flex flex-col  gap-3 bg-gray-100 rounded-lg p-4">
        <div className="flex justify-between items-center border-b-2 pb-6">
          <h4 className="font-semibold  ">
            {plan.title} ({billingType})
          </h4>
          <h6 className="font-semibold">{plan.price}</h6>
        </div>
        {selectedAddons.length > 0 &&
          selectedAddons.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <h4 className="text-gray-400">{item.title}</h4>
              <h6>{item.price}</h6>
            </div>
          ))}
      </div>

      <div className="flex justify-between items-center mt-3">
        <h6 className="text-gray-400">Total (per {billingType})</h6>
        <h3 className="font-semibold text-blue-600">
          +$
          {selectedAddons.reduce(
            (acc, curr) => acc + curr.priceAmount,
            priceNumber
          )}
          /{billingType === "monthly" ? "mo" : "yr"}
        </h3>
      </div>
    </Step>
  );
}

export default Step4;
