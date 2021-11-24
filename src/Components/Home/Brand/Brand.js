import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Brand = () => {
    return (
        <div className="text-center ps-5">
            <div className="d-flex row justify-content-between container p-5 mt-5">
                <img style={{ width: '150px', height: '50px' }} src={slack} alt="" />
                <img style={{ width: '150px', height: '50px' }} src={google} alt="" />
                <img style={{ width: '150px', height: '50px' }} src={netflix} alt="" />
                <img style={{ width: '150px', height: '50px' }} src={uber} alt="" />
                <img style={{ width: '150px', height: '50px' }} src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default Brand;