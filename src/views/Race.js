import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useF1Context } from "../contexts/F1Context";
import {
  getRaces,
  setRaceResult,
  setQualifyingResult,
} from "../reducers/f1Actions";
import RaceStats from "../components/RaceStats";

const Race = () => {
  const [{ races }, dispatch] = useF1Context();
  const [thisRace, setThisRace] = useState(null);
  const { circuitId } = useParams();

  useEffect(() => {
    //useEffect is for side-effects only
    //side effects means a dependency or state is changed
    //so to re avoid infinite re-render or triggering side-effects,
    //ensure that if the dependency is updated, DO NOT update it again!!!
    async function LoadRace() {
      if (races.length === 0) {
        console.log("getRaces");
        await getRaces(dispatch);
      }
      const r = races.filter((race) => race.Circuit.circuitId === circuitId);
      //this will change of thisRace, which will trigger re-render
      r && setThisRace(r[0]);
      if (thisRace && !thisRace.Results && !thisRace.QualifyingResults) {
        const round = thisRace.round;
        //these will change the races, which will trigger re-render
        await setRaceResult(round, dispatch);
        //these will change the races, which will trigger re-render
        await setQualifyingResult(round, dispatch);
      }
      console.log("thisRace", thisRace);
    }
    LoadRace();
  }, [dispatch, thisRace, circuitId, races]);

  return (
    <div style={{ padding: "0.5rem" }}>
      <h3>{thisRace && thisRace.Circuit.circuitName}</h3>
      {thisRace && thisRace.Results && thisRace.QualifyingResults && (
        <RaceStats race={thisRace} />
      )}
    </div>
  );
};

export default Race;
