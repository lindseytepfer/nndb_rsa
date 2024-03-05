import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, setSubID } ) => {
    const [part, setPart] = useState(1)

    const setID = () => {
        const x = uuid();
        setSubID(x);
      }

    const handleClick = () => {
        setPart((prev) => prev + 1);
    }

    const startExp = () => {
        setID();
        pageEvent();
    }

    return (
        <>
            <div className="container">
                <h1 className="color-headers">Instructions</h1>

                { part === 1 &&
                <>
                    <div className="box-highlight">
                        <p>
                            In this task, you will watch 10 different movie clips. <br/>
                            After each clip finishes playing, we will ask you to rate 
                            the clip on different <u>interpersonal</u> characteristics. 
                        </p>

                        <div className="attention">
                            <p>
                                <strong>Specifically, we're going to ask you to identify whether the clip featured:</strong><br/><br/>
                                <strong>Tension</strong>: examples include moments that are awkward, romantic, 
                                or below the threshold for an actual conflict (e.g., the moments that might lead to a conflict itself). <br/><br/>
                                <strong>Conflict</strong>: might include arguments and high intensity dialogue (e.g., break-ups), but doesn't 
                                include violence such as fighting.<br/><br/>
                                <strong>Violence</strong>: tends to involve physical harm, fighting, gunshots, etc.<br/><br/>
                            </p>
                        </div>
                        <p>
                            You'll make each rating on a scale of 1-7, where 1 represents the lowest<br/>
                            amount of tension, conflict, or violence for a particular clip and 7 represents
                            the highest. 
                        </p>

                    </div>

                    <div>
                        <button className="advance-button" onClick={handleClick}>Makes sense!</button>
                    </div>
                </>
                }

                { part === 2 &&
                <>
                    <div className="box-highlight">
                        <p>
                            Each movie clip is between 15-25 seconds long. <br/>
                            In addition to making ratings on the different interpersonal characteristics,<br/>
                            we will also ask about some general features of the clips:
                        </p>

                        <div className="attention">
                            <p>
                             - Have you seen this movie before?<br/>
                             - Was there a social interaction in the clip?<br/>
                             - How many people were in the clip scene?<br/>
                             - How many people were actually interacting? For example, there
                                        might be a scene with many background characters that aren't 
                                        part of any dialogue.  <br/>
                            - How positive or negative did the clip make you feel?<br/>
                            </p>
                        </div>
                        <p>
                            After you finish evaluating all 10 movie clips, we will ask you some basic 
                            demographic information. After you complete this, you will be sent to a debriefing 
                            page which will include a redirect link at the very bottom. Once you click the 
                            redirect button, you will be taken back to Microsoft Cloud Research and your completion
                            code will be registered for payment. 
                        </p>
                    </div>
                    <div>
                        <button className="advance-button" onClick={startExp}>start task</button>
                    </div>
                    <span className="bottom-space">
                    <strong>PLEASE DO NOT REFRESH THE PAGE OR HIT THE BACK BUTTON AT ANY POINT DURING THE STUDY! </strong>
                    </span>
                </>
                }



            </div>
        </>
    )
};