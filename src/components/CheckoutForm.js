import PropTypes from 'prop-types';
import Button from '@/components/Button'

export default function CheckoutForm({ handleCheckout }) {

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        handleCheckout(name, email, phone);
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your  Email address"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-600">Phone Number</label>
                    <input
                        type="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="mt-6">
                    <Button label="Submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </form>
        </div>
    )
}

CheckoutForm.propTypes = {
    handleCheckout: PropTypes.func.isRequired,
};
