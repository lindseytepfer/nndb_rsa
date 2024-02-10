import React, {useState, useEffect} from "react";

export const VidStim = ( { subID } ) => {
    const [trialSequence, setTrialSequence] = useState(null)

    var w = window.innerWidth;
    var h = window.innerHeight;

    useEffect(() => {
        import(`/Users/f004p74/Documents/dartmouth/projects/NNDb/app/public/sub_files/sub_${subID}_run-sequence.json`)
          .then((module) => {
            // Access the JSON data from the imported module
            const data = module.default;
            setTrialSequence(data);
          })
          .catch((error) => {
            console.error('Error loading JSON file:', error);
          });
      }, [subID]);

    return (
        <>
        { showSurvey == false &&
            <>
                <div id="video-align">
                    {playVideo === true && 
                        <>
                            <video src={`/stimuli/${videoListProp[videoStateProp]}.mp4`} width={w-5} height={h-5} autoPlay>Unable to load video.</video>
                        </>
                    }

                    {playVideo === false && 
                        <>
                            <button>Next</button>
                        </>
                    }
                </div>
            
            </>
        }

        { showSurvey == true &&
            <>
                <Questions />
            </>
        }
        
        </>
    )
}