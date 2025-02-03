import PropTypes from 'prop-types';

export default function Stepper({ currentStep, steps }) {
    return (
        <div className="flex items-center justify-center my-6">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    {/* Line before bubble (except first step) */}
                    {index !== 0 && (
                        <div className={`h-1 w-10 md:w-16 ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    )}

                    {/* Step bubble */}
                    <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 
                        ${index <= currentStep ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 text-gray-500'}`}>
                        {index + 1}
                    </div>

                    {/* Step label */}
                    <span className="ml-2 text-sm md:text-base font-medium text-gray-700">{step}</span>
                </div>
            ))}
        </div>
    );
}

Stepper.propTypes = {
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};
