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
                <>
                    <p>
                        In this task, you will watch 10 different movie clips. After each
                        clip finishes playing, we will ask you to rate the clip on several 
                        different characteristics. 
                        <br/><br/>

                        Specifically, we're going to ask you to identify whether the clip featured:
                        1. interpersonal tension
                        2. non-violent interpersonal conflict
                        3. interpersonal violence
                        <br/><br/>

                        Interpersonal tension can include moments that are awkward, or below the threshold for 
                        an actual interpersonal conflict (e.g., the moments that might lead to a conflict itself). 
                        On the other hand, an interpersonal conflict can include arguments and high intensity dialogue,
                        but doesn't include violence such as fighting. Interpersonal violence tends to involve physical
                        harm, fighting, gunshots, and so on.  
                    </p>
                    <div>
                        <button onClick={handleClick}>Makes sense!</button>
                    </div>
                    

                </>
                }

                { part === 2 &&
                    <>
                        <p>
                            In addition, we'll ask:<br/><br/>
                            1.If you've seen the movie this clip belongs to before<br/>
                            2. How many main characters were in the scene<br/>
                            3. How many interacting characters there were<br/>
                            4. Whether or not there was a social interaction occurring in the clip<br/><br/>
                            <br/><br/>

                            At the end of the experiment, you will receive a debriefing. At the end of the 
                            debriefing page is a button that, once clicked, will redirect you back to Microsoft Cloud Research
                            and your completion code will be registered. 
                            <br/><br/>

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