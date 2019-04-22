const React = require('react');
const Layout = require('../layout');
class AddNewProperty extends React.Component {
    render() {
        return (<Layout title = "MYOP - Add New Property">
            <h5>Add new property to your portfolio</h5>
            <form method = "POST" action = "/add_property">
                <input type = "text" name = "name" placeholder = "Give a name" />
                <input type = "text" name = "address" placeholder = "Address of property" />
                <input type = "text" name = "photo_url" placeholder = "Enter a photo url" />
                <input type = "number" name = "rental_mth" placeholder = "Rental/mth ($$)" />
                <input type = "number" name = "day_credit" placeholder = "Rent is due on day of month" />
                <input type = "text" name = "bank_name" placeholder = "Bank where rent gets credited" />
                <div className = "add-prop-button-container">
                    <input type = "submit" value = "Submit" />
                    <h6><a href="/">I will add later </a></h6>
                </div>
            </form>
            
        </Layout>);
    }
}
module.exports = AddNewProperty;