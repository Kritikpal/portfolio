import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const MaterialCard = ({ image }) => {
  const cardStyle = {
    height: "300px",
    width: "100%",
    borderRadius: "16px", // Set the border radius for rounded corners
    overflow: "hidden",
  };

  const imageStyle = {
    height: "100%",
    with: "100%",
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        image={image}
        alt="Image Alt Text"
        style={imageStyle}
      />
    </Card>
  );
};

export default MaterialCard;
