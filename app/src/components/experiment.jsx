import React, { useState, useEffect } from "react";
import { Questions } from "./questions";

export const Experiment = ( { subID, sequence, durations, pageEvent } ) => {
    var w = window.innerWidth;
    var h = window.innerHeight;

    const [progress, setProgress] = useState(0);
    const [playVideo, setPlayVideo] = useState(true);

    // Collecting user responses
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);
    const [q4, setQ4] = useState(0);
    const [q5, setQ5] = useState(0);
    const [q6, setQ6] = useState(0);
    const [q7, setQ7] = useState(0);
    const [q8, setQ8] = useState(0);

    const sendData = () => {
        return
    }



    useEffect( () => {
        const clockerooni = setInterval( () => {
            setPlayVideo(false);
        }, durations[progress]);

        return () => clearInterval(clockerooni);
    }, [progress])

    const advanceClip = () => {
        if (progress !== 9) {
            setProgress((prev) => prev + 1)
        } else {
            pageEvent();
        }
    }

    // TROUBLESHOOTING
    console.log("current clip:", sequence[progress],
     "duration:", durations[progress],
     "sequence list length:", sequence.length,
     "duration list length:",durations.length )

    return (
        <>
            { playVideo === true &&
                <>
                    <video src={`/movie_clips/${sequence[progress]}.mp4`} width={w-5} height={h-5} autoPlay>Unable to load video.</video>
                </>
            }

            {playVideo === false && 
                <>
                    <Questions sendData={sendData} advanceClip={advanceClip} setPlayVideo={setPlayVideo} q1={q1} q2={q2} q3={q3} q4={q4} q5={q5} q6={q6} q7={q7} q8={q8}
                    setQ1={setQ1} setQ2={setQ2} setQ3={setQ3} setQ4={setQ4} setQ5={setQ5} setQ6={setQ6} setQ7={setQ7} setQ8={setQ8}/>
                </>
            }
        </>
    )
}