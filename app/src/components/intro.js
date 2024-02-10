import React, {useState} from "react";

export const Intro = ( { pageEvent, setSubID } ) => {

    const handleClick = () => {
        pageEvent();
    }

    return (
        <>
            <div className="container">
                <h1>Movie Annotation Task</h1>
                <h2>Instructions</h2>
                <p> 
                    In this task, you will watch 10 different movie clips. After each
                    clip finishes playing, we will ask you to rate the clip on several 
                    different characteristics. 
                    <br/><br/>

                    Specifically, we're going to ask you to identify whether the clip featured:
                    1. a non-violent interpersonal conflict
                    2. interpersonal tension
                    3. violence
                    <br/><br/>

                    In addition, we'll ask if you've seen the movie this clip belongs to before,
                    and have you confirm how many main characters were in the scene,
                    how many interacting characters tehre were, and whether or not there was a social
                    interaction occurring in the clip.
                    <br/><br/>
                </p> 
                    
                <div>
                    <button className="advance-button" onClick={handleClick}>begin task</button>
                </div>

            </div>
        </>
    )
};