import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import service5 from '../../../images/icons/service5.png';
import ServiceDetails from './ServiceDetails';



const services = [
    {
        icon: service1,
        title: 'Web & Mobile Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: service2,
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: service3,
        title: 'Web Develoment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: service4,
        title: 'Android Develoment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: service5,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    }
]

const Services = () => {
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