import './DriverCard.css';

const DriverCard = () => {
  return (
    <>
      <fieldset className="field-driver-card">
        <div className="item">
          <div className="standing">
            <div className="rank">1</div>
            <div className="points">69 Pts</div>
          </div>
          <div className="info">
            <div className="name">
              <span className="driver">Lewis Hamilton</span>
            </div>
            <div className="flag">
              <img src={`imgs/flags/UK.png`} alt="" />
            </div>
          </div>
          <div className="car-image">
            <p>Mercedes</p>
            <img src="imgs/drivers/helmets/hamilton.png" alt="" />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DriverCard;
