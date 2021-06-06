import './DriverCard.css';

const DriverCard = ({ driver }) => {
  return (
    <>
      <fieldset className="field-driver-card">
        <div className="item">
          <div className="standing">
            <div className="rank">{driver.position}</div>
            <div className="points">{driver.points} Pts</div>
          </div>
          <div className="info">
            <div className="name">
              <div>
                <span>{`${driver.Driver.givenName}`}</span>
                <span
                  className={`driver ${driver.Constructor.constructorId}`}
                >{`${driver.Driver.familyName}`}</span>
              </div>
            </div>
            <div className="flag">
              <img
                src={`../imgs/flags/${driver.Driver.nationality}.png`}
                alt=""
              />
            </div>
          </div>
          <div className="helmet-image">
            <div className="team-number">
              <span>{driver.Constructor.name}</span>
              <img
                src={`../imgs/drivers/numbers/${driver.Driver.driverId}.png`}
                alt=""
              />
            </div>

            <img
              src={`../imgs/drivers/helmets/${driver.Driver.driverId}.png`}
              alt=""
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DriverCard;
