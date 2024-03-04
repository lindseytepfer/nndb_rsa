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
                <h1>Movie Annotation Task</h1>
                <h2>Instructions</h2>

                { part === 1 &&
                <div>
                    <p>
                        In this task, you will watch 10 different movie clips. After each
                        clip finishes playing, we will ask you to rate the clip on several 
                        different characteristics. 
                        <br/><br/>
                        <div className="intro">
                        Specifically, we're going to ask you to identify whether the clip featured:<br/><br/>
                        1. interpersonal tension<br/>
                        2. conflict<br/>
                        3. violence<br/>
                        </div>
                        <p>
                        Interpersonal tension can include moments that are awkward, or below the threshold for 
                        an actual interpersonal conflict (e.g., the moments that might lead to a conflict itself). 
                        On the other hand, an interpersonal conflict can include arguments and high intensity dialogue,
                        but doesn't include violence such as fighting. Interpersonal violence tends to involve physical
                        harm, fighting, gunshots, and so on.
                        </p>
                    </p>
                    <div>
                        <button className="advance-button" onClick={handleClick}>Makes sense!</button>
                    </div>
                    

                </div>
                }

                { part === 2 &&
                    <>
                        <p>
                            <div className="intro">
                            In addition, we'll ask:<br/><br/>
                            1. If you've seen the movie this clip belongs to before<br/><br/>
                            2. Whether or not there was a social interaction occurring in the clip
                            3. How many people were in the scene<br/><br/>
                            4. How many people were interacting (e.g., some people could be in the background 
                            but not necessarily interacting in the scene)<br/><br/>
                            5. How the clip made you feeel (positive/negative)
                            </div>
                            <p>
                            At the end of the experiment, you will receive a debriefing. At the end of the 
                            debriefing page is a button that, once clicked, will redirect you back to Microsoft Cloud Research
                            and your completion code will be registered. 
                            </p>

                            When you are ready to begin the task, please press the button below. 

                        </p>
                        <div>
                            <button className="advance-button" onClick={startExp}>begin task</button>
                        </div>

                    </>
                }



            </div>
        </>
    )
};