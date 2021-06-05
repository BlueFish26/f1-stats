import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RaceCard from "../components/RaceCard";
import { useF1Context } from "../contexts/F1Context";
import { getRaces } from "../reducers/RaceActions";

const RaceSchedule = () => {
  const [{ races }, dispatch] = useF1Context();
  const history = useHistory();
  useEffect(() => {
    if (races.length === 0) {
      getRaces(dispatch);
    }
  }, [races.length, dispatch]);

  const redirect = (path) => {
    console.log(path);
    history.push(path);
  };

  return (
    <div style={{ padding: "0.5rem" }}>
      <div className="grid-container">
        {races.map((race) => {
          return (
            <div
              className="grid-item"
              key={race.round}
              onClick={() => redirect(`/race/${race.Circuit.circuitId}`)}
            >
              <RaceCard race={race} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RaceSchedule;
