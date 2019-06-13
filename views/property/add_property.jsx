const React = require('react');
const Layout = require('../layout');
class AddNewProperty extends React.Component {
    render() {
        //sauce: //sauce: https://stackoverflow.com/questions/5650457/html-select-form-with-option-to-enter-custom-value
        return (<Layout title = "MYOP - Add New Property">
            <h5 class = "add-prop-header-title">Add new property</h5>
            <form enctype="multipart/form-data" method = "POST" action = "/add_property">
                <h6>Name</h6>
                    <input type="text" className="form-control" name="name" placeholder="Give a name"/>
                <h6>Address</h6>
                    <input type="text" className="form-control" name="address" placeholder="Address"/>
                <h6>Upload image</h6>
                    <input type="file" name="photo_property_upload_main"/>
                <h6>Rental per month (S$)</h6>
                    <input type="number" className="form-control" name="rental_mth" placeholder="Rental/mth ($$)" />
                <h6>Rental due every this day of the month</h6>
                    <input type="number" className="form-control" name="day_credit" placeholder="Rent due on day of mth"/>
                <h6>Rent gets credited into bank</h6>
                    <select className="form-control" id = "banks-dropdown" list = "banks" name = "bank_name" placeholder = "Bank where rent gets credited">
                        <datalist id = "banks">
                            <option value = "DBS / POSB">DBS / POSB</option>
                            <option value = "OCBC">OCBC</option>
                            <option value = "UOB">UOB</option>
                            <option value= "Standard Chartered">Standard Chartered</option>
                            <option value= "Citibank">Citibank</option>
                            <option value = "HSBC">HSBC</option>
                            <option value = "Maybank">Maybank</option>
                            <option value = "CIMB">CIMB</option>
                            <option value = "ICBC">ICBC</option>
                        </datalist>
                    </select>
                <div className = "add-prop-button-container">
                    <input type="submit" className="btn btn-primary" defaultValue = "Add" />
                    <h6><a href="/">Let's do this later </a></h6>
                </div>
            </form>

        </Layout>);
    }
}
module.exports = AddNewProperty;