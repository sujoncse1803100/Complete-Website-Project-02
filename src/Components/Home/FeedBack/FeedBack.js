import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetails from './FeedbackDetails';

const customers = [
    {
        icon: customer1,
        name: 'Nash Patrik',
        title: 'CEO,Marpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: customer2,
        name: 'Mr. Mikel',
        title: 'CEO,Marpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: customer3,
        name: 'Jonus Adam',
        title: 'CEO,Marpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },
    {
        icon: customer3,
        name: 'Ulritch ',
        title: 'CEO,Marpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque consequuntur dolorum eius harum id rem, perferendis saepe impedit voluptatem?'
    },

]

const FeedBack = () => {
    return (
        <div className="mt-5 mb-5 container">
            <h1 className="text-center mb-5">Clients <span style={{ color: 'green' }}>Feedback</span></h1>
            <div className="row d-flex justify-content-center ">
                {
                    customers.map((customer, index) => <FeedbackDetails key={index} customer={customer} />)
                }
            </div>
        </div>
    );
};

export default FeedBack;