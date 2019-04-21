const React = require('react');
const View_property = require('./view_property');
class DeleteProperty extends React.Component {
    render() {
        let propertyId = this.props.data;
        console.log("printing out this.props.data");
        console.log(this.props.data);
        const actionAttribute = `/property/${propertyId}?_method=DELETE`;

        // console.log("printing outttt this.propssss for edit_property jsx...");
        // console.log(this.props);
        // let propertyId = this.props.house[0].id;
        // let name = this.props.house[0].name;
        // let address = this.props.house[0].address;
        // let photo = this.props.house[0].photo_url;
        // let rental_mth = this.props.house[0].rental_mth;
        // let day_credit = this.props.house[0].day_credit;
        // let bank_name = this.props.house[0].bank_name;

        // let actionAttributePut = `/property/${propertyId}?_method=PUT`;
        // let actionAttributeCancel = `/property/${propertyId}?_method=GET`;

        return (<View_property>
            
        </View_property>);
    }
}
module.exports = DeleteProperty;