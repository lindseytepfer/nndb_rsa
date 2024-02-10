import './App.css';
import { useState, useRef, useEffect } from "react";
import { Intro } from "./components/intro";
import { Experiment } from "./components/experiment";
import { Debrief } from "./components/debrief";


const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);

    const nextPage = () => setPageState((prev) => prev + 1);
    
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Intro pageEvent={nextPage} setSubID={setSubID} />
                    case 1:
                        return <Experiment subID={subID} pageEvent={nextPage} />
                    case 2:
                        return <Demographics subID={subID} pageEvent={nextPage} />
                    case 3:
                        return <Debrief pageEvent={nextPage} />
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
