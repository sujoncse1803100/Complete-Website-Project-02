import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://damp-eyrie-90120.herokuapp.com/service')
        .then(response => response.json())
        .then(result => setServices(result));
    },[services]);


    return (
        <div className="mt-5 mb-5 container">
            <h1 className="text-center mb-5">Provide Awesome <span style={{ color: 'green' }}>Services</span></h1>
            <div className="row d-flex justify-content-center ">
                {
                    services.map((service, index) => <ServiceDetails key={index} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;