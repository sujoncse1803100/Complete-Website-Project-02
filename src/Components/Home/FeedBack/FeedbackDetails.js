import React from 'react';
import '../Services/Service.css'

const FeedbackDetails = ({ customer }) => {
    const cardStyle = {
        width: '18rem',
        margin: '10px',
        border: 'none',
        boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)'
    }

    return (
        <div className="card mt-5 col-md-4 col-sm-6 text-center myCard" style={cardStyle}>
            <div className="text-cemter row">
                <img src={customer.icon} style={{ height: '50px', width: '70px', margin: '20px' }} className="cardImage m-3" alt="" />
                <div className="col mt-4 text-start">
                    <h3 className="card-title ">{customer.name}</h3>
                    <h5 className="card-title ">{customer.title}</h5>
                </div>
            </div>
            <div className="card-body text-start ">
                <p style={{ textAlign: 'justify' }} className="card-text ">{customer.description}</p>
            </div>
        </div>
    );
};

export default FeedbackDetails;