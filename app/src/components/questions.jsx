import React, { useState, useEffect } from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Slider, Box } from "@mui/material";


export const Questions = ( { q1, setQ1, q2, setQ2, q3, setQ3, q4, setQ4, q5, setQ5, q6, setQ6, q7, setQ7, q8, setQ8, advanceClip, setPlayVideo } ) => {
    const [showMore, setShowMore] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(()=>{
        if (q4==='Yes') {
            setShowMore(true);
        } else {
            if (q1 || q3 !== 0) {
                setShowButton(true);
            } else {
                setShowAlert(true);
            }
        }
    }, [q2])
    
    const handleChange = () => {
        return
    }

    const nextClip = () => {
        advanceClip();
        setPlayVideo(true);
    }

    return(
    <>
        <div>

        </div>
        
        <div className="radio-div">
            <p>Please answer a few questions about the clip you just watched:</p>


            { showMore === false &&
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
                    
                    <FormLabel id="demo-radio-buttons-group-label">Approximately how many characters were present in the scene overall?</FormLabel>
                    
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">How did the movie clip make you feel? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q3} onChange={e => setQ3(e.target.value)} >
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

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Was there a social interaction present in the clip? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q4} onChange={e => setQ4(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="no" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>
                </>
            }


            
            { showMore == true &&
                <>
                    <FormLabel id="demo-radio-buttons-group-label">How many characters were in the scene were interacting?</FormLabel>
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

            { showButton &&
                <div>
                    <button className="advance-button" onClick={nextClip}>Next Clip</button>
                </div>
            }
        </div>
    </>
    )
};