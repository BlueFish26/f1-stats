import "./ConstructorCard.css";

const ConstructorCard = ({ constructor }) => {
  return (
    <>
      <fieldset className="field-constructor-card">
        <div className="item">
          <div className="standing">
            <div className="rank">{constructor.position}</div>
            <div className="points">{constructor.points} Pts</div>
          </div>
          <div className="info">
            <div className="name">
              <img
                className="flag"
                src={`imgs/flags/${constructor.Constructor.nationality}.png`}
                alt=""
              />
              <span className="team">{constructor.Constructor.name}</span>
            </div>
            <div className="logo">
              <img
                src={`imgs/constructors/${constructor.Constructor.constructorId}_logo.png`}
                alt=""
              />
            </div>
          </div>
          <div className="car-image">
            <img
              src={`imgs/constructors/${constructor.Constructor.constructorId}_car.png`}
              alt=""
            />
          </div>
          {constructor.Constructor.drivers.length > 0 && (
            <div className="drivers">
              <div className="driver">
                <div
                  className={`name ${constructor.Constructor.constructorId}`}
                >
                  {constructor.Constructor.drivers[0].givenName}{" "}
                  {constructor.Constructor.drivers[0].familyName}
                </div>
                <div className="image">
                  <img
                    src={`imgs/drivers/helmets/${constructor.Constructor.drivers[0].driverId}.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className="driver">
                <div
                  className={`name ${constructor.Constructor.constructorId}`}
                >
                  {constructor.Constructor.drivers[1].givenName}{" "}
                  {constructor.Constructor.drivers[1].familyName}
                </div>
                <div className="image">
                  <img
                    src={`imgs/drivers/helmets/${constructor.Constructor.drivers[1].driverId}.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </fieldset>
    </>
  );
};

export default ConstructorCard;
