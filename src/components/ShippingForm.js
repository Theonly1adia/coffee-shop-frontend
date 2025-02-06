import PropTypes from 'prop-types';
import Button from '@/components/Button'

export default function ShippingForm({ handleShipping }) {

    function handleSubmit(event) {
        event.preventDefault();
        const address = event.target.elements.address.value;
        const city = event.target.elements.city.value;
        const state = event.target.elements.state.value;
        const postalCode = event.target.elements.postalCode.value;
        const country = event.target.elements.country.value;

        handleShipping({ address, city, state, postalCode, country });
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="address" className="text-sm font-medium text-gray-600">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter your shipping address"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="city" className="text-sm font-medium text-gray-600">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter your city"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="state" className="text-sm font-medium text-gray-600">State</label>
                    <input
                        type="text"
                        id="state"
                        placeholder="Enter your state"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="postalCode" className="text-sm font-medium text-gray-600">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter your postal code"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="country" className="text-sm font-medium text-gray-600">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter your country"
                        className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="mt-6">
                    <Button label="Next" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </form>
        </div>
    )
}

ShippingForm.propTypes = {
    handleShipping: PropTypes.func.isRequired,
};
