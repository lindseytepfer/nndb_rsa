import React from "react";

export const Debrief = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h2>
                Thank you for completing this study.
            </h2>

            <p>
                Click the button below to submit your completion code for this project. <br/><br/>You will be redirected to Cloud Research,
                 and your participation will be registered.
            </p>

            <div>
                <a href="https://connect.cloudresearch.com/participant/project/76e70db432db4eacb518c37c38d73cc2/complete"><button className="advance-button">SUBMIT</button></a>
            </div>
        </div>
    );
};