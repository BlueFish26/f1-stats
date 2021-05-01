import "./constructor.css";

const ConstructorCard = () => {
  return (
    <>
      <fieldset className="field-constructor-card">
        <div className="item">
          <div className="standing">
            <div className="rank">1</div>
            <div className="points">60 Pts</div>
          </div>
          <div className="info">
            <div className="name">Mercedes</div>
            <div className="logo">
              <img src="imgs/constructors/mercedes_logo.png" />
            </div>
          </div>
          <div className="drivers">
            <div className="driver">
              <span className="name">Lewis Hamilton</span>
              <div className="image">
                <img src="imgs/drivers/hamilton.png" />
              </div>
            </div>
            <div className="driver">
              <span className="name">Valteri Bottas</span>
              <div className="image">
                <img src="imgs/drivers/bottas.png" />
              </div>
            </div>
          </div>
          <div className="car-image">
            <img src="imgs/constructors/mercedes_car.png" />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ConstructorCard;
