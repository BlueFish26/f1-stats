import React from "react";
import "./card.css";

const Card = ({ image, children }) => {
  return (
    <>
      <div className="card">
        {image}
        <div className="container">{children}</div>
      </div>
    </>
  );
};

const Image = ({ src }) => {
  return <img src={src} alt="" style={{ width: "100%" }} />;
};

const Title = ({ text }) => {
  return (
    <h4>
      <b>{text}</b>
    </h4>
  );
};
const SubTitle = ({ text }) => {
  return <h5>{text}</h5>;
};

const Content = ({ children }) => {
  return <div>{children}</div>;
};
Card.Image = Image;
Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Content = Content;

export default Card;
