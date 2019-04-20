const React = require('react');
const Layout = require('../layout');
class EditProperty extends React.Component {
    render() {
        let actionAttributePost = `/property/${propertyId}?_method=PUT`;
        let actionAttributeCancel = `/property/${propertyId}`;

        let name = this.props.result[0].name;
        let address = this.props.result[0].address;
        let photo = this.props.result[0].photo;
        let rental_mth = this.props.result[0].rental_mth;
        let day_credit = this.props.result[0].day_credit;
        let bank_name = this.props.result[0].bank_name;

        return (<Layout title = "MYOP - Edit Property">
            <h5>Edit your property</h5>
            <form method = "post" action = {actionAttributePost}>
                <h4>Name</h4>
                <input type = "text" name = "name" defaultValue = {name} />
                <h4>Address</h4>
                <input type = "text" name = "address" defaultValue = {address} />
                <h4>Photo Url</h4>
                <input type = "text" name = "photo_url" defaultValue = {photo} />
                <h4>Rental per month (S$)</h4>
                <input type = "number" name = "rental_mth" defaultValue = {rental_mth} />
                <h4>Rental is due on this day of the month</h4>
                <input type = "number" name = "day_credit" defaultValue = {day_credit} />
                <h4>Rent gets credited into this bank</h4>
                <input type = "text" name = "bank_name" defaultValue = {bank_name} />
                <input type = "submit" value = "Submit" />
            </form>
            <form style = {{ display: 'inline-block', margin: '0 5px' }} action = {actionAttributeCancel}>
                <input type = "submit" value = "Cancel" />
            </form>
        </Layout>);
    }
}
module.exports = EditProperty;