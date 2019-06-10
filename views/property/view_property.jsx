var React = require("react");
var Layout = require("../layout");

class ViewProperty extends React.Component {

    renderDayCredit(dateOfPayment) {
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
        if (countDown > 5) {
            className = 'bg-success rounded-pill text-dark-50'; //green color
        } else if (countDown > 1 && countDown <= 5) {
            className = 'bg-warning rounded-pill text-dark'; //orange color
        } else {
            className = 'bg-danger rounded-pill text-white'; // red color
        }
        //make the countDown take up two digits worth of space, so that the bootstrap rounded circle is obvious
        if (countDown < 10) {
            countDown = "0" + countDown;
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

    renderCreditIntoBankSwitch(bank) {
        switch (bank) {
            case 'DBS / POSB':
                return 'https://internet-banking.dbs.com.sg/IB/Welcome';
            case 'OCBC':
                return 'https://internet.ocbc.com/internet-banking/';
            case 'UOB':
                return 'https://pib.uob.com.sg/PIBLogin/Public/processPreCapture.do?keyId=lpc';
            case 'Standard Chartered':
                return 'https://ibank.standardchartered.com.sg/nfs/login.htm';
            case 'Citibank':
                return 'https://www.citibank.com.sg/SGGCB/JSO/signon/DisplayUsernameSignon.do';
            case 'HSBC':
                return 'https://www.hsbc.com.sg/ways-to-bank/online/';
            case 'Maybank':
                return 'https://sslsecure.maybank.com.sg/cgi-bin/mbs/scripts/mbb_login.jsp';
            case 'CIMB':
                return 'https://www.cimbclicks.com.sg/clicks/';
            case 'ICBC':
                return 'https://mybank.icbc.com.cn/icbc/newenperbank/perbank3/frame/frame_index.jsp';
            default:
                return '#';
        }
    }

    render() {

        console.log("Creating a loop now for homeeeeee page of houses owned by userrrr/landlord..");
        let allHouseStatsArr = this.props.house.map(thisHouseStats => {
            let id = parseInt(thisHouseStats.id);
            let name = thisHouseStats.name;
            let address = thisHouseStats.address;
            let photo = thisHouseStats.photo_url;
            let rental_mth = thisHouseStats.rental_mth;
            let day_credit;
            //just for asthetics purpose, we put a zero in front of the number if it is a single digit;
            if (thisHouseStats.day_credit < 10) {
                day_credit = "0" + thisHouseStats.day_credit;
            } else {
                day_credit = thisHouseStats.day_credit;
            }
            let bank_name = thisHouseStats.bank_name;


            console.log("printing out data type of day_credit: ...");
            console.log(typeof (day_credit));

            // let actionAttributePut = `/property/${propertyId}?_method=PUT`;
            // { actionAttributePut }

            return (
                <div className = "card bg-dark text-white" stylename = {"width: 18rem;"}>
                    <img className="card-img" src = {photo} alt = "Property's uploaded image" />
                    <div className="card-img-overlay" id = "view-prop-dark-overlay">
                        <div className="view-prop-buttons-container" id="test-card-img-4">
                            <h4 className = "card-title">{name}</h4>
                            <a href = {`/property/${id}/edit`} className = "btn btn-secondary">Edit</a>
                            <a href = {`/`} className="btn btn-secondary">Back</a>
                        </div>
                        <h5>Address: {address}</h5>
                        <h5>Rental per month (S$): {rental_mth}</h5>
                        <h5>Rent due every this day (of the month): {day_credit}</h5>
                        <h5>Days to next payment: {this.renderDayCredit(day_credit)}</h5>
                        <h5>Rent credited into:
                            <a href={this.renderCreditIntoBankSwitch(bank_name)} target="_blank">{bank_name}</a>
                        </h5>
                    </div>
                </div>
            );
        });
        return (
            <Layout title="MYOP - View Property">
                <div>
                    {allHouseStatsArr}
                </div>
            </Layout>
        );
    }
}

module.exports = ViewProperty;
