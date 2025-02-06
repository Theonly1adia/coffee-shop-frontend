import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function CheckoutForm({ handleCheckout }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        handleCheckout(data);
    }

    return (
        
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Home / Checkout</h6>
                </div>
            </div>

            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                        <div className='border border-gray-300 shadow-lg rounded-lg bg-white p-6 text-gray-900'>

                                <div className='card-header'>
                                    <h4>Basic Information</h4>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>First Name</label>
                                                    <input type='text' name='firstname' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Last Name</label>
                                                    <input type='text' name='lastname' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Phone Number</label>
                                                    <input type='tel' name='phone' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Email Address</label>
                                                    <input type='email' name='email' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Full Address</label>
                                                    <textarea rows='3' name='address' className="form-control" required></textarea>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group mb-3'>
                                                    <label>City</label>
                                                    <input type='text' name='city' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group mb-3'>
                                                    <label>State</label>
                                                    <input type='text' name='state' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Zip Code</label>
                                                    <input type='text' name='zipcode' className='form-control' required />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <Button type='submit' className='btn btn-primary'>Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CheckoutForm.propTypes = {
    handleCheckout: PropTypes.func.isRequired,
};
