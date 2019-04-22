const React = require('react');
const Layout = require('../layout');
class EditProperty extends React.Component {
    render() {
        console.log("printing outttt this.propssss for edit_property jsx...");
        console.log(this.props);
        let propertyId = this.props.house[0].id;
        let name = this.props.house[0].name;
        let address = this.props.house[0].address;
        let photo = this.props.house[0].photo_url;
        let rental_mth = this.props.house[0].rental_mth;
        let day_credit = this.props.house[0].day_credit;
        let bank_name = this.props.house[0].bank_name;

        let actionAttributePut = `/property/${propertyId}?_method=PUT`;
        let actionAttributeCancel = `/property/${propertyId}?_method=GET`;

        return (<Layout title = "MYOP - Edit Property">
            <h3>Edit your property</h3>
            <form method = "POST" action = {actionAttributePut}>
                <h5>Name</h5>
                    <input type = "text" name = "name" defaultValue = {name} placeholder = {name}/>
                    <h5>Address</h5>
                    <input type = "text" name = "address" defaultValue = {address} placeholder = {address} />
                    <h5>Photo Url</h5>
                    <input type = "text" name = "photo" defaultValue = {photo} placeholder = {photo} />
                    <h5>Rental per month (S$)</h5>
                    <input type = "text" name = "rental_mth" value = {rental_mth}/>
                    <h5>Rental due every this day of the month</h5>
                    <input type = "number" name = "day_credit" defaultValue = {day_credit}/>
                    <h5>Rent gets credited into bank</h5>
                    <input type = "text" name = "bank_name" defaultValue = {bank_name} placeholder = {bank_name} />
                        <div className= "edit-prop-form-buttons-container">
                            <input type = "submit" defaultValue = "Submit" />
                            <input type = "submit" defaultValue = "Cancel" formAction = {actionAttributeCancel} />
                        </div>
            </form>
            <div className = "edit-prop-delete-button-container"> 
                <a href = {`/property/${propertyId}/delete`} className = "btn btn-warning">Delete this property</a>
                <p>* WARNING: This will delete your property data and associated tenancy / lease data *</p>
            </div>
        </Layout>);
    }
}
module.exports = EditProperty;