import React, { useState, useEffect } from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Slider, Box } from "@mui/material";


export const Questions = ( { q1, setQ1, q2, setQ2, q3, setQ3, q4, setQ4, q5, setQ5, q6, setQ6, q7, setQ7, q8, setQ8, advanceClip, setPlayVideo, sendData } ) => {
    const [batch, setBatch] = useState(1);
    const [firstButton, setFirstButton] = useState(false);
    const [secondButton, setSecondButton] = useState(false)
    const [showAlert, setShowAlert] = useState(false);

    const clearRadios = () => {
        setQ1(0);
        setQ2(0);
        setQ3(0);
        setQ4(0);
        setQ5(0);
        setQ6(0);
        setQ7(0);
        setQ8(0);
    }

    useEffect(() => {
        if (q1 && q2 && q3 && q4 !== 0) {
            setFirstButton(true);
            setShowAlert(false);
        } else {
            setShowAlert(true);
        }
    }, [q1,q2,q3,q4])
    
    useEffect(()=>{
        if (q5 && q6 && q7 && q8 !== 0) {
            setShowAlert(false);
            setSecondButton(true);
        } else {
            setShowAlert(true);
        }
    }, [q5,q6,q7,q8])


    const handleSet = () => {
        if (q4 === "yes") {
            setBatch(2)
        } else {
            nextClip()
        }
    }
    
    const nextClip = () => {
        sendData()
        setFirstButton(false);
        setSecondButton(false);
        setShowAlert(true);
        clearRadios();
        advanceClip();
        setPlayVideo(true);
    }

    return(
    <>
        <p className="color-headers" style={{fontSize:"1.5em"}}>Please answer a few questions about the clip you just watched:</p>

        
        <div className="radio-div">
            { batch === 1 &&
                <>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Have you ever seen this movie before? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q1} onChange={e => setQ1(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">How did the movie clip make you feel? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q2} onChange={e => setQ2(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">Very Negative </FormLabel>
                                <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="4" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Very Positive</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormLabel id="demo-radio-buttons-group-label">Approximately how many characters were present in the scene overall?</FormLabel>
                    <input type="number" min="1" max="100" minlength="2" maxlength="2" value={q3} onChange={(e) => setQ3(e.target.value)}></input>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Was there a social interaction present in the clip? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q4} onChange={e => setQ4(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="no" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    { firstButton &&
                        <>
                        <button onClick={handleSet}>Next</button>
                        </>
                    }
                </>
            }
            
            { batch == 2 &&
                <>
                    <FormLabel id="demo-radio-buttons-group-label">Approximately how many characters were in the scene were interacting?</FormLabel>
                    <input type="number" min="1" max="100" minlength="2" maxlength="2" value={q5} onChange={(e) => setQ5(e.target.value)}></input>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">How much interpersonal tension was in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q6} onChange={e => setQ6(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">How much conflict was in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q7} onChange={e => setQ7(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">How much violence was in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q8} onChange={e => setQ8(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>
            </>
            }

            { showAlert &&
                <>
                <p>please answer all the questions above.</p>
                </>
            }

            { secondButton &&
                <div>
                    <button className="advance-button" onClick={nextClip}>Next Clip</button>
                </div>
            }
        </div>
    </>
    )
};