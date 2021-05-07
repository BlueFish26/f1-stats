import './DriverCardWide.css';

const DriverCardWide = ({ driver }) => {
  return (
    <>
      <fieldset className="field-driver-card-wide">
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
                  className={`driver ${driver.Constructors[0].constructorId}`}
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
              <span>{driver.Constructors[0].name}</span>
              <img
                src={`../imgs/drivers/numbers/${driver.Driver.driverId}.png`}
                alt=""
              />
              <img
                src={`../imgs/drivers/helmets/${driver.Driver.driverId}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DriverCardWide;