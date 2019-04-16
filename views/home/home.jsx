var React = require("react");
var Layout = require("../layout");

class Home extends React.Component {
    render() {
        // console.log("Printing out this.props: "+this.props);
        //   console.log("Printing out this.props.artists: "+this.props.artists);

        console.log("Creating a loop now for homeeeeee page of houses owned by userrrr/landlord..");

        let allHousesStatsArr = this.props.house.map(thisHouseStats => {
            let id = parseInt(thisHouseStats.id);
            let name = thisHouseStats.name;
            let address = thisHouseStats.address;
            let photo = thisHouseStats.photo_url;
            let rental_mth = thisHouseStats.rental_mth;
            let day_credit = thisHouseStats.day_credit;
            let bank_name = thisHouseStats.bank_name;
            return (
                // <li>{id} {num} {name}</li>
                <div className="card" stylename={"width: 18rem;"}>
                    <img className="card-img-top" src={photo} alt="Property's image"/>
                    <div className="card-body">
                        <a href={''}>
                            <h4 className="card-title">{name}</h4>
                        </a>
                        <h5>Address: {address}</h5>
                        <h5>Rental per month (S$): {rental_mth}</h5>
                        <h5>Rent comes in on day (of the month): {day_credit}</h5>
                        <h5>Rent gets credited into bank: {bank_name}</h5>
                    </div>
                </div>
            );
        });
        return (
            <Layout title="Home">
                <div>
                    {allHousesStatsArr}
                </div>
            </Layout>
        );
    }
}

module.exports = Home;
