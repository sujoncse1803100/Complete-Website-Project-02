import React, { useState } from 'react';

const Footer = () => {
    const containerStyle = {
        backgroundColor: '#FBD062',
    }

    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent');
    }


    return (
        <div style={containerStyle} className="p-5">
            <div className=" container row mb-5 pb-5 ">
                <div className="mt-5  col-md-6">
                    <h1>Let's handle your project, professionally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nam fuga dolore maiores harum unde saepe voluptatum obcaecati veritatis amet?</p>
                </div>
                <div className="mt-5 col-md-6">
                    <form onSubmit={handleSubmit} className="w-100">
                        <div class="form-group mt-2">
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Your name / company's name" />
                        </div>

                        <div class="form-group mt-2">
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Your email address" />
                        </div>

                        <div class="form-group mt-2">
                            <textarea onBlur={handleBlur} placeholder="Your message" class="form-control" name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <button style={{ width: '150px', backgroundColor: '#111430' }} type="submit" class="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>

            </div>
            <h5 className="text-center mt-5">&copy; Orange lab 2021</h5>
        </div>
    );
};

export default Footer;