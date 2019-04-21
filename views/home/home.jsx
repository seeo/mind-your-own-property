var React = require("react");
var Layout = require("../layout");
// var Img = require('react-image');


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
        let countDown = daysToNextPayment(dateOfPayment);
        let className = 'rounded-pill text-dark';
        if (countDown > 5){
            className = 'bg-success rounded-pill text-white'; //green color
        } else if (countDown > 1 && countDown <=5) {
            className = 'bg-warning rounded-pill text-white'; //orange color
        } else {
            className = 'bg-danger rounded-pill text-white'; // red color
        }
        //make the countDown take up two digits worth of space, so that the bootstrap rounded circle is obvious
        if (countDown<10){
            countDown = "0"+countDown;
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
                {countDown}
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
            let day_credit;
                //just for asthetics purpose, we put a zero in front of the number if it is a single digit;
                if (thisHouseStats.day_credit<10){
                    day_credit = "0"+thisHouseStats.day_credit;
                }else{
                    day_credit = thisHouseStats.day_credit;
                }
            let bank_name = thisHouseStats.bank_name;
            
            
                console.log("printing out data type of day_credit: ...");
                console.log(typeof(day_credit));
            return (
                <div className="card" stylename={"width: 18rem;"}>
                    <img className="card-img-top" src={photo} alt="Property's image"/>
                    <div className="card-body">
                        <a href={`/property/${id}`}>
                            <div className = "home-buttons-container">
                                <h4 className="card-title">{name}</h4>
                            </div>
                        </a>
                        <h5>Address: {address}</h5>
                        <h5>Rental per month (S$): {rental_mth}</h5>
                        <h5>Rent due on day (of the month): {day_credit}</h5>
                        <h5>Days to next payment: {this.renderDayCredit(day_credit)}</h5>
                        <h5>Rent credited into: {bank_name}</h5>
                    </div>
                </div>
            );
        });
        // let logoLocation = () => <Img src = '../../public/images/small_cat.jpg' alt = "logo"/>;
       
        return (
            <Layout title = "MYOP - Home">
            <header>
                <div className = "button-container" style = {{ display: 'inline-block', position: 'absolute', right: '5%'}}>
                    <form style = {{ display: 'inline-block', margin: '0 5px' }} action = "/logout">
                        <input type = "submit" value = "Log out" />
                    </form>
                </div>
                    <h2>
                        
                        <a href = "/">Mind Your Own Property</a>
                    </h2>
            </header>
                <div>
                    {allHousesStatsArr}
                </div>
            </Layout>
        );
    }
}

module.exports = Home;
