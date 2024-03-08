import './App.css';
import { useState } from "react";
import { Consent } from "./components/consent";
import { Intro } from "./components/intro";
import { ShuffleClips } from './components/shuffleclips';
import { Experiment } from "./components/experiment";
import { Demographics } from './components/demo';
import { Debrief } from "./components/debrief";


const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);
    const [sequence, setSequence] = useState(null)
    const [durations, setDurations] = useState(null)

    const nextPage = () => setPageState((prev) => prev + 1);

    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Consent pageEvent={nextPage} setSubID={setSubID} />
                    case 1:
                        return <Intro pageEvent={nextPage} setSubID={setSubID} />
                    case 2:
                        return <ShuffleClips pageEvent={nextPage} setSequence={setSequence} setDurations={setDurations} />
                    case 3:
                        return <Experiment subID={subID} pageEvent={nextPage} sequence={sequence} durations={durations}/>
                    case 4:
                        return <Demographics pageEvent={nextPage} subID={subID} />
                    case 5: 
                        return <Debrief />
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
