import React, { useState } from "react";


<div className="relative flex items-center mb-4">
    {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
            {/* Step Indicator (Number) */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold 
                ${index === currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                {index + 1}
            </div>

            {/* Progress Line (Except Last Step) */}
            {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 transition-all duration-300 
                    ${index < currentStep ? "bg-blue-500" : "bg-gray-300"}`}></div>
            )}
        </div>
    ))}
</div>
