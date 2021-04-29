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
    async function LoadRace() {
      if (races.length === 0) {
        console.log("getRaces");
        await getRaces(dispatch);
      }
      setThisRace(
        races.filter((race) => race.Circuit.circuitId === circuitId)[0]
      );
      if (thisRace) {
        const round = thisRace.round;
        await setRaceResult(round, dispatch);
        await setQualifyingResult(round, dispatch);
      }
      console.log("thisRace", thisRace);
    }
    LoadRace();
  }, [thisRace, dispatch]);

  return (
    <div>
      <h1>RACE - {circuitId}</h1>
      <p>{thisRace && thisRace.Circuit.circuitName}</p>
      {thisRace && thisRace.Results && thisRace.QualifyingResults && (
        <RaceStats race={thisRace} />
      )}
    </div>
  );
};

export default Race;
