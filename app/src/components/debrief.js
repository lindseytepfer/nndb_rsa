import React from "react";

export const Debrief = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h1>DEBRIEF TO PARTICIPANTS</h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: _______ </h3>
            <h4>Principal Investigator: Dr. Mark Allen Thornton</h4><br/>

            <strong>What was the purpose of this study?</strong>
            <p>


            </p>
            <strong>What were our research goals?</strong>
            <p>


            </p>
            <strong>How was this study conducted?</strong>
            <p>


            </p>
            <strong>Did we tell you everything?</strong>
            <p>
                There was no deception in this study. 
            </p>
            <strong>Why is this study important?</strong>
            <p>



            </p>
            <strong>What if I want to learn more?</strong>
            <p>
                You can read more about our research – including feeling available copies of our published 
                scientific articles – on our lab website: http://scraplab.org/ 
            </p>
            
            <p>
                This study was conducted by researchers at the Social Computation Representation And Prediction Lab in the Psychology and Brain Sciences 
                Department at Dartmouth College, Hanover, NH, USA. If you have any questions, please contact principal investigator Mark Thornton at 
                mark.a.thornton@dartmouth.edu. 
            </p>

            <p>
                This research has been reviewed and approved by the Committee for the Protection of Human Subjects at Dartmouth College. 
                They can be reached by phone at (603) 646-6482, or by email at cphs@dartmouth.edu, if your questions, concerns, or complaints are 
                not being answered by the research team, if you cannot reach the research team, if you want to talk to someone besides the research 
                team, or if you have questions about your rights as a research participant.
            </p>

            <div>
                <p><strong>PLEASE CLICK THE BUTTON BELOW TO BE REDIRECTED FOR YOUR CLOUD RESEARCH COMPLETION CODE:</strong></p>
                <a href="INSERT_NEWLINK_HERE"><button className="advance-button">ACCESS MY COMPLETION CODE</button></a>
            </div>
        </div>
    );
};