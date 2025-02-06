import { useState } from 'react';
import Stepper from '@/components/Stepper';
import CheckoutForm from '@/components/CheckoutForm';
import ShippingForm from '@/components/ShippingForm';
import PaymentForm from '@/components/PaymentForm';

export default function Checkout() {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Basic Info', 'Shipping', 'Payment', 'Review'];

    function nextStep() {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }

    function prevStep() {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    }

    function handleCheckout(data) {
        console.log('Checkout Data:', data);
        nextStep(); 
    }

    function handleShipping(data) {
        console.log('Shipping Data:', data)
        nextStep();
    }

    function handlePayment(data) {
        console.log('Payment Data:', data)
        nextStep();
    }
    return (
        <div>
            <Stepper currentStep={currentStep} steps={steps} />
            
            {currentStep === 0 && <CheckoutForm handleCheckout={handleCheckout} />}
            {currentStep === 1 && <ShippingForm handleShipping={handleShipping} />}
            {currentStep === 2 && <PaymentForm handlePayment={handlePayment} />}
            {currentStep === 3 && <div>Review & Confirm <button onClick={() => alert('Order Placed!')}>Submit</button></div>}
            
            {currentStep > 0 && <button onClick={prevStep}>Back</button>}
        </div>
    );
}
