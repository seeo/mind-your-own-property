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
        let actionAttributeDelete = `/property/${propertyId}?_method=DELETE`;

        //<p>current file path: {photo} </p>

        return (<Layout title = "MYOP - Edit Property">
            <h3>Edit your property</h3>
            <form enctype="multipart/form-data" method = "POST" action = {actionAttributePut}>
                <h5>Name</h5>
                    <input type = "text" name = "name" defaultValue = {name} placeholder = {name}/>
                    <h5>Address</h5>
                    <input type = "text" name = "address" defaultValue = {address} placeholder = {address} />
                    <h5>Photo Url</h5>
                    <input type="file" name="photo_property_upload_main" defaultValue={photo} />

                    <h5>Rental per month (S$)</h5>
                    <input type = "text" name = "rental_mth" defaultValue = {rental_mth}/>
                    <h5>Rental due every this day of the month</h5>
                    <input type = "number" name = "day_credit" defaultValue = {day_credit}/>
                    <h5>Rent gets credited into bank</h5>
                    <input type = "text" list = "banks" name = "bank_name" defaultValue = {bank_name} placeholder = {bank_name} />
                        <datalist id="banks">
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
                        <div className= "edit-prop-form-buttons-container">
                            <input type = "submit" defaultValue = "Submit" />
                            <input type = "submit" defaultValue = "Cancel" formAction = {actionAttributeCancel} />
                        </div>
            </form>
            <form className = "edit-prop-delete-form-container" method = "POST" action = {actionAttributeDelete}>
                <input className="btn btn-warning" type = "submit" defaultValue = "Delete this property*" />
                <p>* WARNING: This will delete your property, and tenancy data (if any)</p>
            </form>
        </Layout>);
    }
}
module.exports = EditProperty;