const React = require('react');
const Layout = require('../layout');
class AddNewProperty extends React.Component {
    render() {
        //sauce: //sauce: https://stackoverflow.com/questions/5650457/html-select-form-with-option-to-enter-custom-value
        return (<Layout title = "MYOP - Add New Property">
            <h5 class = "add-prop-header-title">Add new property to your portfolio</h5>
            <form method = "POST" action = "/add_property">
                <input type="text" name="name" placeholder="Give a name"/>
                <input type="text" name="address" placeholder="Address of property"/>
                <input type="text" name="photo_url" placeholder="Enter a photo url"/>
                <input type="number" name="rental_mth" placeholder="Rental/mth ($$)" />
                <input type="number" name="day_credit" placeholder="Rent due on day of mth"/>
                <input type = "text" list = "banks" name = "bank_name" placeholder = "Bank where rent gets credited" />
                    <datalist id = "banks">
                        <option>DBS / POSB</option>
                        <option>OCBC</option>
                        <option>UOB</option>
                        <option>Standard Chartered</option>
                        <option>Citibank</option>
                        <option>HSBC</option>
                        <option>Maybank</option>
                        <option>CIMB</option>
                        <option>ICBC</option>
                    </datalist>
                <div className = "add-prop-button-container">
                    <input type = "submit" value = "Submit" />
                    <h6><a href="/">I will add later </a></h6>
                </div>
            </form>
            
        </Layout>);
    }
}
module.exports = AddNewProperty;