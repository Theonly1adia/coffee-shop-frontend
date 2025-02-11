
import PropTypes from 'prop-types';
import Button from '@/components/Button'

export default function CheckoutForm({handleCheckout}) {

    function handleCheckout(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const address = event.target.elemets.address.value;
        const phone = event.target.elements.phone.value;
        handleCheckout(name, address, phone);

    }
    return (
        <div>
            <form onSubmit={handleCheckout} className="flex flex-col space-y-4 max-w-md mx-auto">
                <label htmlFor="name">Name</label>
                <input type="text"
                placeholder="Name"/>

                <label htmlFor="address">Address</label>
                <input type="text"
                placeholder="Address"/>

                <label htmlFor="phone">Phone</label>
                <input type="phone"
                placeholder="Phone Number"/>

                <Button label="Submit" />
            </form>
        </div>
    )
}
        

CheckoutForm.propTypes = {
  // Add prop-types here
   content: PropTypes.string.isRequired,
};