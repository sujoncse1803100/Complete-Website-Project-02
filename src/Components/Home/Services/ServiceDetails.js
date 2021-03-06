import React from 'react';
import './Service.css'
const ServiceDetails = ({ service }) => {

    const cardStyle = {
        width: '18rem',
        margin: '10px',
        border: 'none',
        boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)'
    }

    return (
        <div className="card mt-5 col-md-4 col-sm-6 text-center myCard" style={cardStyle}>
            <div className="text-cemter">
                <img src={`data:image/png;base64,${service.image}`} style={{ height: '80px', width: '80px' }} className="cardImage m-3" alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{service.title}</h5>
                <p className="card-text text-center">{service.desc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;