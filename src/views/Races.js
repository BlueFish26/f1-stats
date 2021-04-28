import React, { Fragment, useEffect, useState } from "react";
import { useF1Context } from "../contexts/F1Context";
import {
  getRaces,
  setRaceResult,
  setQualifyingResult,
} from "../reducers/f1Actions";
import RaceStats from "../components/RaceStats";
import Accordion from "../components/Accordion";

const Races = () => {
  const [{ races }, dispatch] = useF1Context();
  useEffect(() => {
    if (races.length === 0) {
      console.log("loading races from useEffect");
      getRaces(dispatch);
    }
  }, [races.length, dispatch]);
  const [loading, setLoading] = useState(true);

  function loadRaceResult(round) {
    const race = races.filter((r) => r.round === round);
    let isRaceRoundLoaded = race[0].Results
      ? race[0].Results.length > 0
      : false;
    if (!isRaceRoundLoaded) {
      setLoading(true);
      setRaceResult(round, dispatch);
      setQualifyingResult(round, dispatch);
      setLoading(!loading);
    }
  }

  return (
    <Fragment>
      <Accordion title="Formula 1 Races - 2021">
        {console.log("render races")}
        {races &&
          races.map((race) => {
            const title = `${race.raceName} - ${race.Circuit.circuitName}`;
            return (
              <Accordion.Item
                key={race.round}
                itemKey={race.round}
                title={title}
                onToggle={(e) => {
                  if (e.target.checked) {
                    loadRaceResult(race.round);
                  }
                }}
              >
                <RaceStats race={race} />
              </Accordion.Item>
            );
          })}
      </Accordion>
    </Fragment>
  );
};

export default Races;
