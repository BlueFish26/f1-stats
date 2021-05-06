import "./RaceCard.css";
const RaceCard = ({ race }) => {
  return (
    <>
      <fieldset className="field-race-card">
        <legend className="card-legend-title">Round {race.round}</legend>
        <div className="item">
          <div className="date">
            <div className="weekend">{race.date}</div>
            <div className="flag">
              <img
                src={`imgs/flags/${race.Circuit.Location.country}.png`}
                alt=""
              />
            </div>
          </div>

          <div className="info">
            <div className="venue">
              <div>
                <span className="country">{race.Circuit.Location.country}</span>
              </div>
              <span className="ciruit">{race.Circuit.circuitName}</span>
            </div>
          </div>

          <div className="track-image">
            <img src={race.Circuit.circuitImagePath} alt="" />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default RaceCard;
