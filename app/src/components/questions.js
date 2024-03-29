import React from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";


export const Questions = ( { q1, setQ1, q2, setQ2, q3, setQ3, q4, setQ4, q5, setQ5 } ) => {

    return(
    <>
        <div>
            <p>Please answer a few questions about the clip you just watched</p>
        </div>
        
        <div className="radio-div">

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
                <FormLabel id="demo-radio-buttons-group-label">Was there a social interaction prsent in the scene? </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q2} onChange={e => setQ2(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                        <FormControlLabel value="no" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="yes" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                    </RadioGroup>
            </FormControl>
            
            { q2 == "yes" &&
                <>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Was there an interpersonal conflict present in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q3} onChange={e => setQ3(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Was there interpersonal tension present in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q4} onChange={e => setQ4(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Was there violence present in the scene? </FormLabel>
                            <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q5} onChange={e => setQ5(e.target.value)} >
                                <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                                <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                                <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                                <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                            </RadioGroup>
                    </FormControl>

                    <FormLabel id="demo-radio-buttons-group-label">How many characters were present in the scene overall?</FormLabel>
                    <Box sx={{ width: 200 }}>
                        <Slider aria-label="Number" marks min={0} max={10} value={q6} onChange={handleChange} />
                    </Box>


                    <FormLabel id="demo-radio-buttons-group-label">How many characters were in the scene were interacting?</FormLabel>
                    <Box sx={{ width: 200 }}>
                        <Slider aria-label="Number" marks min={0} max={10} value={q7} onChange={handleChange} />
                    </Box>
            
            </>
            }

            {
                <>
                <button>Next Clip</button>
                </>
            }
        </div>
    </>
    )
};