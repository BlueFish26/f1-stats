import React from "react";
import Card from "../components/Card";

const RaceCard = ({ race }) => {
  return (
    <Card
      image={<Card.Image src={`imgs/circuits/${race.Circuit.circuitId}.svg`} />}
    >
      <Card.Title text={race.raceName} />
      <Card.SubTitle text={race.date} />
      <Card.Content>
        <p>
          <b>{race.Circuit.Location.country}</b>
        </p>
        <p>{race.Circuit.circuitName}</p>
      </Card.Content>
    </Card>
  );
};

export default RaceCard;
