import React, { useEffect, useState } from "react";
import FeedbackDetails from "./FeedbackDetails";
import Loader from "react-loader-spinner";

const FeedBack = () => {
  const [clientReview, setClientReview] = useState([]);

  useEffect(() => {
    fetch("https://damp-eyrie-90120.herokuapp.com/review")
      .then((res) => res.json())
      .then((result) => setClientReview(result));
  }, [clientReview]);

  return (
    <div className="mt-5 mb-5 container">
      <h1 className="text-center mb-5">
        Clients <span style={{ color: "green" }}>Feedback</span>
      </h1>
      <div className="row d-flex justify-content-center ">
        {!clientReview.length && (
          <div className="w-100 text-center">
            <Loader
              className="m-2"
              type="Oval"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
        )}
        {clientReview.map((client, index) => (
          <FeedbackDetails key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
