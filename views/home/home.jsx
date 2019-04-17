var React = require("react");
var Layout = require("../layout");

class Home extends React.Component {
    
    renderDayCredit(dateOfPayment){
        function daysToNextPayment(dateOfPayment) {
            const dateNow = new Date();
            const dateOfCollection = new Date(new Date().setDate(dateOfPayment));
            const dayInMS = 86400000 //number of milliseconds in a day...
            if (dateNow > dateOfCollection) {
                const nextDateofCollection = new Date(dateOfCollection.setMonth(dateOfCollection.getMonth() + 1));
                return (nextDateofCollection - dateNow) / dayInMS;
            } else {
                return (dateOfCollection - dateNow) / dayInMS;
            }
        }
        const countDown = daysToNextPayment(dateOfPayment);
        let className = 'rounded-circle text-white ';
        if (countDown > 5){
            className = 'bg-success'; //green color
        } else if (countDown > 1 && countDown <=5) {
            className = 'bg-warning'; //orange color
        } else {
            className = 'bg-danger'; // red color
        }
        return (
            <span
                className={className}
                style={{
                    borderRadius: '30px',
                    width: '30px',
                    height: '30px',
                }}
            >
                {dateOfPayment}
            </span>
        )
    }

    render() {
        console.log("Creating a loop now for homeeeeee page of houses owned by userrrr/landlord..");
        let allHousesStatsArr = this.props.house.map(thisHouseStats => {
            let id = parseInt(thisHouseStats.id);
            let name = thisHouseStats.name;
            let address = thisHouseStats.address;
            let photo = thisHouseStats.photo_url;
            let rental_mth = thisHouseStats.rental_mth;
            let day_credit = thisHouseStats.day_credit;
            let bank_name = thisHouseStats.bank_name;
            console.log("printing out data type of day_credit: ...");
            console.log(typeof(day_credit));
            return (
                <div className="card" stylename={"width: 18rem;"}>
                    <img className="card-img-top" src={photo} alt="Property's image"/>
                    <div className="card-body">
                        <a href={''}>
                            <h4 className="card-title">{name}</h4>
                        </a>
                        <h5>Address: {address}</h5>
                        <h5>Rental per month (S$): {rental_mth}</h5>
                        <h5>Rent comes in on day (of the month): {this.renderDayCredit(day_credit)}</h5>
                        <h5>Rent gets credited into bank: {bank_name}</h5>
                    </div>
                </div>
            );
        });
        return (
            <Layout title="Home">
            <header>
                <div class="button-container" style={{ display: 'inline-block', position: 'absolute', right: '5%'}}>
                    <form style={{ display: 'inline-block', margin: '0 5px' }} action="/login">
                        <input type="submit" value="Log in" />
                    </form>
                    <form style={{ display: 'inline-block', margin: '0 5px' }} action="/register">
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
                <h2>Mind Your Own Property</h2>
            </header>
                <div>
                    {allHousesStatsArr}
                </div>
            </Layout>
        );
    }
}

module.exports = Home;
