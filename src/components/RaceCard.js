import Card from "../components/Card";

const RaceCard = ({ race }) => {
  return (
    <Card image={<Card.Image src={race.Circuit.circuitImagePath} />}>
      <Card.Title text={race.raceName} />
      <Card.SubTitle text={race.date} />
      <Card.Content>
        <p>
          <b>{race.Circuit.Location.country}</b>
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`../imgs/flags/${race.Circuit.Location.country}.png`}
            style={{
              width: "15%",
              height: "2rem",
              border: "1px solid grey",
              borderRadius: "1px",
              boxShadow: "1px 1px grey",
              marginRight: "0.5rem",
            }}
          />
          <div>
            <h5>{race.Circuit.circuitName}</h5>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default RaceCard;
