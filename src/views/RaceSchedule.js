import { useEffect } from "react";
import RaceCard from "../components/RaceCard";
import { useF1Context } from "../contexts/F1Context";
import { getRaces } from "../reducers/f1Actions";
const RaceSchedule = () => {
  const [{ races }, dispatch] = useF1Context();
  useEffect(() => {
    if (races.length === 0) {
      console.log("loading races from useEffect");
      getRaces(dispatch);
    }
  }, [races.length, dispatch]);

  return (
    <div style={{ padding: "0.5rem" }}>
      <div className="grid-container">
        {races.map((race) => {
          return (
            <div className="grid-item" key={race.round}>
              <RaceCard race={race} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RaceSchedule;
