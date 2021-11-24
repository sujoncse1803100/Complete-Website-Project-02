import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className="mb-3 pb-3 mt-5 container">
            <div className="row">
                <div className="col-md text-center-6 p-5">
                    <h1 className="">Let's Grow Your Brand To Next Level</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita deserunt at eaque, illo, eos ea eius, in nesciunt nam ducimus officia voluptates ipsum dignissimos aspernatur praesentium commodi sit natus.
                    </p>
                    <Link className=" text-dark" style={{ textDecoration: 'none' }} to="/order">
                        <button style={{ width: '150px', backgroundColor: '#111430' }} className="btn rounded btn-primary">Hire Us</button>
                    </Link>
                </div>
                <div className="col-md-6 mb-5">
                    <img style={{ height: '300px' }} src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;