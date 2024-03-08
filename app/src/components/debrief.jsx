import React from "react";

export const Debrief = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h2>
                Thank you for completing this study. 
            </h2>

            <div>
                <p><strong>PLEASE CLICK THE BUTTON BELOW TO BE REDIRECTED FOR YOUR CLOUD RESEARCH COMPLETION CODE:</strong></p>
                <a href="INSERT_NEWLINK_HERE"><button className="advance-button">ACCESS MY COMPLETION CODE</button></a>
            </div>
        </div>
    );
};