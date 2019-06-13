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
                <h6>Name</h6>
                    <input type="text" className="form-control" name = "name" defaultValue = {name} placeholder = {name}/>
                <h6>Address</h6>
                    <input type="text" className="form-control" name = "address" defaultValue = {address} placeholder = {address} />
                <h6>Upload image</h6>
                    <input type="file" name="photo_property_upload_main" defaultValue={photo} />
                <h6>Rental per month (S$)</h6>
                    <input type="text" className="form-control" name = "rental_mth" defaultValue = {rental_mth}/>
                <h6>Rental due every this day of the month</h6>
                    <input type="number" className="form-control" name = "day_credit" defaultValue = {day_credit}/>
                <h6>Rent gets credited into bank</h6>
                    <select className="form-control" id="banks-dropdown" list="banks" name="bank_name" placeholder="Bank where rent gets credited">
                        <datalist id="banks">
                            <option value="DBS / POSB">DBS / POSB</option>
                            <option value="OCBC">OCBC</option>
                            <option value="UOB">UOB</option>
                            <option value="Standard Chartered">Standard Chartered</option>
                            <option value="Citibank">Citibank</option>
                            <option value="HSBC">HSBC</option>
                            <option value="Maybank">Maybank</option>
                            <option value="CIMB">CIMB</option>
                            <option value="ICBC">ICBC</option>
                        </datalist>
                    </select>
                        <div className= "edit-prop-form-buttons-container">
                            <input type="submit" className="btn btn-primary" defaultValue = "Submit" />
                            <input type="submit" className="btn btn-primary" defaultValue = "Cancel" formAction = {actionAttributeCancel} />
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